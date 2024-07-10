import { Schema, model } from 'mongoose';
import { ProductModel, TInventory, TProduct } from './product.interface';

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: [true, 'Product quantity is required.'] },
  inStock: {
    type: Boolean,
    required: [true, 'Please input valid stock status.'],
  },
});

// product schema
const productSchema = new Schema<TProduct, ProductModel>({
  name: {
    type: String,
    required: [true, 'Product name is required.'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required.'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required.'],
  },
  category: {
    type: String,
    required: [true, 'Product category is required.'],
  },
  tags: {
    type: [String],
    optional: true,
  },
  image: {
    type: String,
    required: [true, 'Product image is required.'],
  },
  inventory: {
    type: inventorySchema,
    optional: true,
  },
});

// creating a static method to the model

productSchema.statics.isProductExists = async function (name: string) {
  const existingProduct = await Product.findOne({ name });

  return existingProduct;
};

export const Product = model<TProduct, ProductModel>('Product', productSchema);
