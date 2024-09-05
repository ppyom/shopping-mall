import styles from './BannerItem.module.css';
import type { Banner } from '../../../../types/banner.ts';

interface Props extends Banner {}

const BannerItem = ({ title, img }: Props) => {
  return (
    <div className={styles.item}>
      <p>{title}</p>
      <img src={`/images/${img}`} alt="banner image" />
    </div>
  );
};

export default BannerItem;
