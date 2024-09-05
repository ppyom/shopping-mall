import type { Product } from '../types/product.ts';

interface ProductSearchParams {
  limit?: number;
  page?: number;
  sort?: string;
  category?: string;
}

class ProductAPI {
  private static baseurl = 'http://localhost:8000/products';
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
    const url = new URL(`${this.baseurl}?${searchParams.toString()}`);
    const response = await fetch(url);
    return await response.json();
  }
}

export default ProductAPI;
