import APIClient from './apiClient.ts';
import type { Product } from '../types/product.ts';

interface ProductSearchParams {
  limit?: number;
  page?: number;
  sort?: string;
  category?: string;
}

class ProductAPI {
  private static endpoint = 'products';
  static async getProducts(
    options: ProductSearchParams = {},
  ): Promise<Product[]> {
    const searchParams = new URLSearchParams(
      Object.entries(options).map(([key, value]) => {
        if (key === 'limit' || key === 'page' || key === 'sort') {
          return [`_${key}`, value.toString()];
        }
        return [key, value];
      }),
    );
    return await APIClient.getItems<Product[]>(
      this.endpoint,
      searchParams.toString(),
    );
  }
}

export default ProductAPI;
