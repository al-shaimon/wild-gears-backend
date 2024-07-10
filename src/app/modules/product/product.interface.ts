import { Model } from 'mongoose';

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags?: string[];
  images: string[];
  inventory?: TInventory;
};

export interface ProductModel extends Model<TProduct> {
  // eslint-disable-next-line no-unused-vars
  isProductExists(name: string): Promise<TProduct | null>;
}
