import styles from './Products.module.css';
import type { Product as ProductType } from '../../types/product.ts';
import Product from './Product/Product.tsx';

interface Props {
  products: ProductType[];
  className?: string;
}

const Products = ({ products, className = '' }: Props) => {
  return (
    <ul className={`${styles.products} ${className}`}>
      {products.map((product) => (
        <li key={`product_${product.id}`}>
          <Product {...product} />
        </li>
      ))}
    </ul>
  );
};

export default Products;
