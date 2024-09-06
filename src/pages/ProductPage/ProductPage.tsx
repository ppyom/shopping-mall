import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductAPI from '../../apis/product.ts';
import PageLayout from '../../components/layouts/PageLayout/PageLayout.tsx';
import Categories from '../../components/Categories/Categories.tsx';
import Sort from '../../components/Sort/Sort.tsx';
import Products from '../../components/Products/Products.tsx';
import styles from './ProductPage.module.css';
import type { Product } from '../../types/product.ts';
import type { SortOption } from '../../types/sort.ts';

const LIMIT = 12;

const ProductPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<SortOption>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isDone, setIsDone] = useState<boolean>(false);

  const handleUpdateSort = (option: SortOption) => {
    if (sort !== option) {
      setSort(option);
      setPage(1);
      setIsDone(false);
    }
  };
  const handleMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    ProductAPI.getProducts({
      sort,
      limit: LIMIT * page,
      category: id === 'all' ? '' : id,
    }) //
      .then((data) => {
        if (data.length < LIMIT * (page - 1)) {
          throw new Error('');
        }
        return data;
      })
      .then(setProducts)
      .catch(() => setIsDone(true));
  }, [sort, page, id]);

  return (
    <PageLayout className={styles.productPage}>
      <h2>Shop The Latest</h2>
      <Categories className={styles.categories} />
      <Sort current={sort} update={handleUpdateSort} />
      <div className={styles.productsCon}>
        <Products className={styles.products} products={products} />
        <button
          className={styles.moreBtn}
          onClick={handleMore}
          disabled={isDone}
        >
          더보기
        </button>
      </div>
    </PageLayout>
  );
};

export default ProductPage;
