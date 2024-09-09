import { useState } from 'react';
import Counter from '../../Counter/Counter.tsx';

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
    <section>
      <h3>상품 상세 정보</h3>
      <div>
        <img src={`/images/${img}`} alt={title} />
      </div>
      <div>
        <p>{title}</p>
        <p>
          <span>{price.toLocaleString()}원</span>
          {discount !== 0 && (
            <>
              <span>-{discount}%</span>
              <span>
                {((price * (100 - discount)) / 100).toLocaleString()}원
              </span>
            </>
          )}
        </p>
        <Counter
          count={count}
          increment={handleIncrement}
          decrement={handleDecrement}
        />
        <button className="">장바구니에 추가</button>
      </div>
    </section>
  );
};

export default DetailSection;
