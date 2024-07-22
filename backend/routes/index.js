const express = require('express');
const healthCheckRouter = require('./healthCheck');
const userRouter = require('./user');

const router = express.Router();

router.use('/', healthCheckRouter);
router.use('/', userRouter);

module.exports = router;
