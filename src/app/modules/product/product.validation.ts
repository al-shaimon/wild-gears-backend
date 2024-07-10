import Joi from 'joi';

// Joi schema for inventory
const inventoryValidationSchema = Joi.object({
  quantity: Joi.number().required().messages({
    'number.base': 'Product quantity must be a number.',
    'any.required': 'Product quantity is required.',
  }),
  inStock: Joi.boolean().required().messages({
    'boolean.base': 'Stock status must be a boolean.',
    'any.required': 'Please input valid stock status.',
  }),
});

// Joi schema for product
const productValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.base': 'Product name must be a string.',
    'any.required': 'Product name is required.',
  }),
  description: Joi.string().required().messages({
    'string.base': 'Product description must be a string.',
    'any.required': 'Product description is required.',
  }),
  price: Joi.string().required().messages({
    'string.base': 'Product price must be a string.',
    'any.required': 'Product price is required.',
  }),
  category: Joi.string().required().messages({
    'string.base': 'Product category must be a string.',
    'any.required': 'Product category is required.',
  }),
  categoryImage: Joi.string().required().messages({
    'string.base': 'Product category image must be a string.',
    'any.required': 'Product category image is required.',
  }),
  tags: Joi.array().items(Joi.string()).messages({
    'array.base': 'Product tags must be an array.',
  }),
  images: Joi.array().required().items(Joi.string()).messages({
    'string.base': 'Product image must be an array.',
    'any.required': 'Product image is required.',
  }),
  inventory: inventoryValidationSchema.messages({}),
});

export default productValidationSchema;
