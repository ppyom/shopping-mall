import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import DetailSection from '../../components/layouts/DetailSection/DetailSection.tsx';
import DescriptionTabSection from '../../components/layouts/DescriptionTabSection/DescriptionTabSection.tsx';
import OtherProductSection from '../../components/layouts/OtherProductSection/OtherProductSection.tsx';

const DetailPage = () => {
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
