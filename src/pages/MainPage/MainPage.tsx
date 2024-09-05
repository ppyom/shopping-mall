import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import BannerSection from '../../components/layouts/BannerSection/BannerSection.tsx';
import ProductSection from '../../components/layouts/ProductSection/ProductSection.tsx';

const MainPage = () => {
  return (
    <PageLayout>
      <h2>메인 페이지</h2>
      <BannerSection />
      <ProductSection />
    </PageLayout>
  );
};

export default MainPage;
