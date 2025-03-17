const express = require('express');
const ProductsService = require('./../services/product.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});


router.get('/:id', async(req, res) => {
  const { id } = req.params
  const product = await service.findOne(id);
  res.json(product);
});

router.post('/', async(req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json({
    message: 'Created',
    data: newProduct
  });
});

router.put('/:id', async(req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated',
    data: body,
    id
  });
});

router.patch('/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: 'Patched',
      data: product
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id', async(req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json({
    message: 'Deleted',
    id: rta.id
  });
});

module.exports = router;