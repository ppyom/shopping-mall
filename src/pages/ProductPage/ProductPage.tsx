import { useEffect, useState } from 'react';
import ProductAPI from '../../apis/product.ts';
import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import Filter, { type FilterValue } from '../../components/Filter/Filter.tsx';
import Products from '../../components/Products/Products.tsx';
import styles from './ProductPage.module.css';
import type { Product } from '../../types/product.ts';

const ProductPage = () => {
  const [filter, setFilter] = useState<FilterValue | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const handleUpdateFilter = (filter: FilterValue | null) => {
    setFilter(filter);
  };

  useEffect(() => {
    ProductAPI.getProducts({ sort: filter || '' }) //
      .then(setProducts);
  }, [filter]);

  return (
    <PageLayout className={styles.productPage}>
      <h2>Shop The Latest</h2>
      <Filter current={filter} update={handleUpdateFilter} />
      <Products className={styles.products} products={products} />
    </PageLayout>
  );
};

export default ProductPage;
