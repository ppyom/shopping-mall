import { useEffect, useState } from 'react';
import ProductAPI from '../../apis/product.ts';
import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import BannerSection from '../../components/layouts/BannerSection/BannerSection.tsx';
import ProductSection from '../../components/layouts/ProductSection/ProductSection.tsx';
import type { Product } from '../../types/product.ts';

const MainPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductAPI.getProducts({ category: 'new', limit: 6 }).then(setProducts);
  }, []);

  return (
    <PageLayout>
      <h2 hidden>메인 페이지</h2>
      <BannerSection />
      <ProductSection products={products} />
    </PageLayout>
  );
};

export default MainPage;
