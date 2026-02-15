const serverless = require('serverless-http');
const app = require('./app'); // tu express app

module.exports.handler = serverless(app);
