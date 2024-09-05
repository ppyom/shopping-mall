import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import Filter from '../../components/Filter/Filter.tsx';
import Products from '../../components/Products/Products.tsx';

const ProductPage = () => {
  return (
    <PageLayout>
      <h2>Shop The Latest</h2>
      <Filter />
      <Products products={[]} />
    </PageLayout>
  );
};

export default ProductPage;
