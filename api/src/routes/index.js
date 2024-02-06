const express = require('express');
const frontRouter = require('./front.routes');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/frontend', FrontRouter);
}
module.exports = routerApi;