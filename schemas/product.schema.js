const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(3).max(20);
const price = joi.number().min(10);
const img = joi.string().uri();

const createProductSchema = joi.object({
  name: name.required(),
  price: price.required(),
  image: img.required()
});

const updateProductSchema = joi.object({
  name: name,
  price: price,
  image: img
});

const getProductSchema = joi.object({
  id: id.required()
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema
};