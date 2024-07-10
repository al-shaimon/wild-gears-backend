/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ProductServices } from './products.service';

// getting all products controller with search query
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await ProductServices.getAllProductsFromDB(
      searchTerm as string,
    );

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: searchTerm
        ? `Products matching search term '${searchTerm}' fetched successfully!`
        : 'Products fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).send({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};
export const ProductControllers = {
  getAllProducts,
};
