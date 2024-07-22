const express = require('express');
const { createUser, loginUser } = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/users/sign_up', createUser);
userRouter.post('/users/login', loginUser);

module.exports = userRouter;