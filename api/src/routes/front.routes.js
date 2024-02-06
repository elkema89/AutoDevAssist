const express = require('express');
const router= express.Router();
const frontController = require('../controllers/frontend.controller');

router  
    .get('/', frontController.get)
    .get('/:id', frontController.getById)
    .post('/',frontController.create)
    .put('/:id', frontController.update)
    .delete('/:id', frontController._delete);

module.exports = router;