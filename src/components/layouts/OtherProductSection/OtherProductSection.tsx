import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NavigationOptions } from 'swiper/types';
import ProductAPI from '../../../apis/product.ts';
import Product from '../../Product/Product.tsx';
import styles from './OtherProductsSection.module.css';
import type { Product as ProductType } from '../../../types/product.ts';

interface Props {
  category: string;
}

const OtherProductSection = ({ category }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    ProductAPI.getProducts({ category }).then(setProducts);
  }, []);

  return (
    <section className={styles.otherProductSection}>
      <h3>이런 상품도 있어요</h3>
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        modules={[Navigation]}
        navigation={
          {
            prevEl: `.${styles.prevBtn}`,
            nextEl: `.${styles.nextBtn}`,
          } as NavigationOptions
        }
        className={styles.slider}
      >
        {products.map((product) => (
          <SwiperSlide key={`other_${product.id}`}>
            <Product {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.btnGroup}>
        <button className={`${styles.navBtn} ${styles.prevBtn}`}>
          <i className="fa-solid fa-angle-left" />
        </button>
        <button className={`${styles.navBtn} ${styles.nextBtn}`}>
          <i className="fa-solid fa-angle-right" />
        </button>
      </div>
    </section>
  );
};

export default OtherProductSection;
