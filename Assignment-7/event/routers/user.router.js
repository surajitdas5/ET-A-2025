const express = require('express')

const {
    getAllUsers,
    getUserById,
    adduser,
    updateUser,
    deleteUser
} = require('./../controllers/user.controller.js')

const userRouter = express.Router()

userRouter.get("/", getAllUsers)
userRouter.get("/:id",getUserById)
userRouter.post("", adduser)
userRouter.put('/:id',  updateUser)
userRouter.delete('/:id', deleteUser)



module.exports = userRouter