import { Link } from 'react-router-dom';
import Products from '../../Products/Products.tsx';
import styles from './ProductSection.module.css';
import type { Product } from '../../../types/product.ts';

interface Props {
  products: Product[];
}

const ProductSection = ({ products }: Props) => {
  return (
    <section className={styles.productSection}>
      <h3>Shop The Latest</h3>
      <Link to="products">View All</Link>
      <Products products={products} />
    </section>
  );
};

export default ProductSection;
