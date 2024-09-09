import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import DetailSection from '../../components/layouts/DetailSection/DetailSection.tsx';
import DescriptionTabSection from '../../components/layouts/DescriptionTabSection/DescriptionTabSection.tsx';
import OtherProductSection from '../../components/layouts/OtherProductSection/OtherProductSection.tsx';
import type { Product } from '../../types/product.ts';
import ProductAPI from '../../apis/product.ts';

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    ProductAPI.getProduct(id!).then(setProduct);
  }, [id]);

  return (
    <PageLayout>
      <h2>상세 페이지</h2>
      <DetailSection />
      <DescriptionTabSection />
      <OtherProductSection />
    </PageLayout>
  );
};

export default DetailPage;
