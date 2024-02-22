const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let refreshTokens = []

const authController = {
    //Register
    registeruser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            //Create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            });

            //Save to db
            const user = await newUser.save()
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    //GENERATE ACCESS TOKEN
    generateAccessToken: (user) =>{
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin,
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "30s" }
        );
    },
     //GENERATE Refresh TOKEN
    generateRefreshToken: (user) =>{
        return jwt.sign({
            id: user.id,
            admin: user.admin,
        },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "365d" }
        );
    },
    //LOGIN
    loginUser: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username });
            if (!user) {
                req.status(404).json("Wrong username!");
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!validPassword) {
                res.status(404).json("Wrong password");
            }
            if (user && validPassword) {
                const accesToken =  authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                refreshTokens.push(refreshToken);
                res.cookie("refreshToken",refreshToken,{
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite:"strict"
                })
                const { password, ...other } = user._doc;
                res.status(200).json({...other, accesToken});
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },
    requestRefreshToken: async(req,res) =>{
        // Lấy refreshToken từ user
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken){
            return res.status(401).json("You're not authenticated");
        }
        if(!refreshTokens.includes(refreshToken)){
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken,process.env.JWT_REFRESH_KEY,(err,user)=>{
            if(err){
                console.log(err)
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
            //Create new accesstoken,refresh token
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            res.cookie("refreshToken",newRefreshToken,{
                httpOnly: true, 
                secure: false,
                path: "/",
                sameSite:"strict"
            });
            res.status(200).json({accesToken: newAccessToken});
        })
    },

    //LOG OUT
    userLogout: async(req,res) => {
        res.clearCookie("refreshToken");
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.status(200).json("Logged out")
    }
};
module.exports = authController;