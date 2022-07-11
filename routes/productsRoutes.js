const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/create', productsController.create);

router.get('/edit', productsController.edit);

router.get('/detail', productsController.detail);

router.get('/cart', productsController.cart);

router.get('/list/:categoria', productsController.productFilter);


module.exports = router;