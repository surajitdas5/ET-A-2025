const express = require('express')

const {
    getAllUsers,
    getUserById,
    adduser,
    updateUser,
    deleteUser
} = require('./../controllers/user.controller.js')

const userRouter = express.Router()

userRouter.get("/users", getAllUsers)
userRouter.get("/users/:id",getUserById)
userRouter.post("/users", adduser)
userRouter.put('/users/:id',  updateUser)
userRouter.delete('/users/:id', deleteUser)



module.exports = userRouter