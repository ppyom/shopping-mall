import { useState } from 'react';
import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import Filter, { type FilterValue } from '../../components/Filter/Filter.tsx';
import Products from '../../components/Products/Products.tsx';

const ProductPage = () => {
  const [filter, setFilter] = useState<FilterValue | null>(null);

  const handleUpdateFilter = (filter: FilterValue | null) => {
    setFilter(filter);
  };

  return (
    <PageLayout>
      <h2>Shop The Latest</h2>
      <Filter current={filter} update={handleUpdateFilter} />
      <Products products={[]} />
    </PageLayout>
  );
};

export default ProductPage;
