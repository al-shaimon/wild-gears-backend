import { Product } from './product.model';

// getting all product from database & search query
const getAllProductsFromDB = async (searchTerm?: string) => {
  const query = searchTerm ? { name: new RegExp(searchTerm, 'i') } : {};

  const result = await Product.find(query);

  return result;
};

// getting single product from database
const getSingleProductFromDB = async (productId: string) => {
  const result = await Product.findOne({ _id: productId });

  // const result = await Product.aggregate([{ $match: { id: id } }]);
  return result;
};

export const ProductServices = {
  getAllProductsFromDB,
  getSingleProductFromDB,
};
