const authController = require("../controllers/authControllers");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//REGISTER
router.post("/register",authController.registeruser);

//LOGIN
router.post("/login",authController.loginUser);

//REFRESH
router.post("/refresh",authController.requestRefreshToken);

//LOGOUT
router.post("/logout",middlewareController.verifyToken,authController.userLogout);//User sign in ms sign out dc


module.exports = router;
