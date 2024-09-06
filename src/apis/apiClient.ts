class APIClient {
  private static baseurl = 'http://localhost:8000';
  static async getItems<T>(
    endpoint: string,
    searchParams: string = '',
  ): Promise<T> {
    const url = new URL(`${this.baseurl}/${endpoint}?${searchParams}`);
    const response = await fetch(url);
    return await response.json();
  }
}

export default APIClient;
