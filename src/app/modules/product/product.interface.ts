import { Model } from 'mongoose';

export type TInventory = {
  quantity: number;
  inStock: boolean;
};

export type TProduct = {
  name: string;
  description: string;
  price: string;
  category:
    | 'Jacket'
    | 'Tent'
    | 'Camping Stove'
    | 'Portable Chair'
    | 'Flashlights'
    | 'Camping Cookware'
    | 'First Aid Kit'
    | 'Water Bottle'
    | 'Sleeping Bag'
    | 'Backpack'
    | 'Hiking Boots';
  tags?: ('Best Selling' | 'Featured')[];
  images: string[];
  inventory?: TInventory;
  rating?: number;
};

export interface ProductModel extends Model<TProduct> {
  // eslint-disable-next-line no-unused-vars
  isProductExists(name: string): Promise<TProduct | null>;
}
