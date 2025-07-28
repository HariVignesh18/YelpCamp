const app = require('../app'); // assuming app.js is in root

const serverless = require('serverless-http');
module.exports.handler = serverless(app);