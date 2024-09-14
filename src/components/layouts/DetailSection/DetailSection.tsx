import { useState } from 'react';
import Counter from '../../Counter/Counter.tsx';
import styles from './DetailSection.module.css';
import type { Product } from '../../../types/product.ts';

interface Props extends Product {}

const DetailSection = ({ img, title, price, discount }: Props) => {
  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <section className={styles.detailSection}>
      <h3 hidden>상품 상세 정보</h3>
      <div className={styles.imageCon}>
        <img src={`/images/${img}`} alt={title} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{title}</p>
        <p className={styles.priceCon}>
          <span className={`${discount !== 0 ? styles.cancel : ''}`}>
            {price.toLocaleString()}원
          </span>
          {discount !== 0 && (
            <>
              <span className={styles.discount}>-{discount}%</span>
              <span className={styles.discounted}>
                {((price * (100 - discount)) / 100).toLocaleString()}원
              </span>
            </>
          )}
        </p>
        <p className={styles.description}>
          {/* TODO Data type에 description 추가 */}
        </p>
        <Counter
          count={count}
          increment={handleIncrement}
          decrement={handleDecrement}
        />
        <button className={styles.addBtn}>장바구니에 추가</button>
      </div>
    </section>
  );
};

export default DetailSection;
