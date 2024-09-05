import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { NavigationOptions } from 'swiper/types';
import BannerAPI from '../../../apis/banner.ts';
import BannerItem from './BannerItem/BannerItem.tsx';
import styles from './BannerSection.module.css';
import type { Banner } from '../../../types/banner.ts';

const BannerSection = () => {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    BannerAPI.getBanners().then(setBanners);
  }, []);

  return (
    <section className={styles.bannerSection}>
      <h3 hidden>이벤트 배너</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={
          {
            prevEl: `.${styles.prevBtn}`,
            nextEl: `.${styles.nextBtn}`,
          } as NavigationOptions
        }
        pagination={{
          clickable: true,
          bulletClass: styles.paginationBullet,
          bulletActiveClass: styles.paginationBulletActive,
        }}
        className={styles.slider}
      >
        {banners.map((banner) => (
          <SwiperSlide key={`banner_${banner.id}`}>
            <BannerItem {...banner} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={`${styles.navBtn} ${styles.prevBtn}`}>
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button className={`${styles.navBtn} ${styles.nextBtn}`}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </section>
  );
};

export default BannerSection;
