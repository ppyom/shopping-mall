import styles from './Product.module.css';
import type { Product as ProductType } from '../../types/product.ts';

interface Props extends ProductType {}

const Product = ({ title, img, price, discount }: Props) => {
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={`/images/${img}`} alt={title} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>
          <span className={`${discount !== 0 ? styles.sale : ''}`}>
            {price.toLocaleString()}원
          </span>
          {discount !== 0 && (
            <span>{((price * (100 - discount)) / 100).toLocaleString()}원</span>
          )}
        </p>
      </div>
      {discount !== 0 && <span className={styles.discount}>-{discount}%</span>}
    </div>
  );
};

export default Product;
