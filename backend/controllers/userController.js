import User from "../models/userModel.js"
import asyncHandler from "../middleware/asyncHandler.js"

const authUser = asyncHandler(async(req,res)=>{
    res.send("Auth User")
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






