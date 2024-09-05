import type { Banner } from '../types/banner.ts';

interface BannerSearchParams {
  limit?: number;
}

class BannerAPI {
  private static baseurl = 'http://localhost:8000/banners';
  static async getBanners({ limit = 3 }: BannerSearchParams = {}): Promise<
    Banner[]
  > {
    const searchParams = new URLSearchParams({
      _limit: limit?.toString(),
    });
    const url = new URL(`${this.baseurl}?${searchParams.toString()}`);
    const response = await fetch(url);
    return await response.json();
  }
}

export default BannerAPI;
