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
      <h2 hidden>상세 페이지</h2>
      {product && <DetailSection {...product} />}
      <DescriptionTabSection />
      {product?.category && <OtherProductSection category={product.category} />}
    </PageLayout>
  );
};

export default DetailPage;
