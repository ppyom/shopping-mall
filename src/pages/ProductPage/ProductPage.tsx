import { useEffect, useState } from 'react';
import ProductAPI from '../../apis/product.ts';
import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import Sort from '../../components/Sort/Sort.tsx';
import Products from '../../components/Products/Products.tsx';
import styles from './ProductPage.module.css';
import type { Product } from '../../types/product.ts';
import type { SortOption } from '../../types/sort.ts';

const ProductPage = () => {
  const [sort, setSort] = useState<SortOption>('');
  const [products, setProducts] = useState<Product[]>([]);

  const handleUpdateFilter = (sort: SortOption) => {
    setSort(sort);
  };

  useEffect(() => {
    ProductAPI.getProducts({ sort }) //
      .then(setProducts);
  }, [sort]);

  return (
    <PageLayout className={styles.productPage}>
      <h2>Shop The Latest</h2>
      <Sort current={sort} update={handleUpdateFilter} />
      <Products className={styles.products} products={products} />
    </PageLayout>
  );
};

export default ProductPage;
