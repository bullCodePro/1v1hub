const express = require('express');
const { healthCheck } = require('../controllers/healthCheck');

const healthCheckRouter = express.Router();

healthCheckRouter.get('/healthCheck', healthCheck);

module.exports = healthCheckRouter;
