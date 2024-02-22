const User = require("../models/User");

const userController = {
    //GET ALL USER
    getAllUsers: async(req,res)=>{
        try {
            const user = await User.find();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    deleteUser: async(req,res) =>{
        try {
            const user = User.findById(req.params.id);//Khoong xoa
            res.status(200).json("DELETE successfully!")

        } catch (err) {
            res.status(500).json(err)
        }
    }
}
module.exports = userController;