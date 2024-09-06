import APIClient from './apiClient.ts';

class CategoryAPI {
  private static endpoint = 'categories';
  static async getCategories() {
    return await APIClient.getItems(this.endpoint);
  }
}

export default CategoryAPI;
