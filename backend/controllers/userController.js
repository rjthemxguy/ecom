import User from "../models/userModel.js"
import asyncHandler from "../middleware/asyncHandler.js"
import jwt from "jsonwebtoken"

const authUser = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;
    
    const user = await User.findOne({email})
    
    if(user && (await user.matchPassword(password))) {

        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET, {expiresIn: '30d'})

        res.cookie('jwt', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: 30 * 24 * 60 * 60 * 1000
        })

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    }
    else {
        res.status(401)
        throw new Error("Email or Password Invalid")
    }
})

const registerUser = asyncHandler(async(req,res)=>{
    res.send("Register User")
})

const logoutUser = asyncHandler(async(req,res)=>{
    res.send("Logout")
})

const getUserProfile = asyncHandler(async(req,res)=>{
    res.send("Get User Profile")
})

const updateUserProfile = asyncHandler(async(req,res)=>{
    res.send("Update User Profile")
})

const getUsers = asyncHandler(async(req,res)=>{
    res.send("Get Users")
})

const deleteUser = asyncHandler(async(req,res)=>{
    res.send("Delete User")
})

const getUserById = asyncHandler(async(req,res)=>{
    res.send("Get User By ID")
})

const updateUser = asyncHandler(async(req,res)=>{
    res.send("Update User")
})

export {
    updateUser,
    getUserById,
    deleteUser,
    getUsers,
    updateUserProfile,
    getUserProfile,
    logoutUser,
    authUser,
    registerUser,
    
}






