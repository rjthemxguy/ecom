import  express  from "express";
import {
    updateUser,
    getUserById,
    deleteUser,
    getUsers,
    updateUserProfile,
    getUserProfile,
    logoutUser,
    authUser,
    registerUser } from "../controllers/userController.js";

const router = express.Router()

router.route("/").get(getUsers).post(registerUser)
router.post("/logout", logoutUser)
router.post("/login", authUser)
router.route("/profile").get(getUserProfile).put(updateUser)
router.route("/:id").delete(deleteUser).put(updateUser).get(getUserById)


    
export default router