import { Product } from './product.model';

// getting all product from database & search query
const getAllProductsFromDB = async (searchTerm?: string) => {
  const query = searchTerm ? { name: new RegExp(searchTerm, 'i') } : {};

  const result = await Product.find(query);

  return result;
};

export const ProductServices = {
  getAllProductsFromDB,
};
