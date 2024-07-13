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
    type: String,
    required: [true, 'Product price is required.'],
  },
  category: {
    type: String,
    enum: [
      'Jacket',
      'Tent',
      'Camping Stove',
      'Portable Chair',
      'Flashlights',
      'Camping Cookware',
      'First Aid Kit',
      'Water Bottle',
      'Sleeping Bag',
      'Backpack',
      'Hiking Boots',
    ],
    required: [true, 'Product category is required.'],
  },
  tags: {
    type: [String],
    enum: ['Best Selling', 'Featured'],
    optional: true,
  },
  images: {
    type: [String],
    required: [true, 'Product image is required.'],
  },
  inventory: {
    type: inventorySchema,
    optional: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
});

// creating a static method to the model

productSchema.statics.isProductExists = async function (name: string) {
  const existingProduct = await Product.findOne({ name });

  return existingProduct;
};

export const Product = model<TProduct, ProductModel>('Product', productSchema);
