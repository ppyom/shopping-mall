import APIClient from './apiClient.ts';
import type { Banner } from '../types/banner.ts';

interface BannerSearchParams {
  limit?: number;
}

class BannerAPI {
  private static endpoint = 'banners';
  static async getBanners({ limit = 3 }: BannerSearchParams = {}): Promise<
    Banner[]
  > {
    const searchParams = new URLSearchParams({
      _limit: limit?.toString(),
    });
    return await APIClient.getItems<Banner[]>(
      this.endpoint,
      searchParams.toString(),
    );
  }
}

export default BannerAPI;
