const express = require('express')
const router = express.Router()
const { loginUser,registerUser,getUserprofile,logoutUser} = require("../controllers/authcontrollers")
const authProtect = require("../middleware/authprotect")
const validateUserData = require("../middleware/uservalidate")
router.post('/register',validateUserData,registerUser)

router.post('/login',validateUserData,loginUser)

router.post('/logout',authProtect,logoutUser)

router.get("/islogin",authProtect,(req, res) =>{
    res.json({
        name:req.user.name,
        isAuthenticated:true,
        bgcolor:req.user.bgcolor,
        email:req.user.email
    })
})

router.get('/profile',authProtect,getUserprofile)

module.exports = router