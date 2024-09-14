import { useState } from 'react';
import styles from './DescriptionTabSection.module.css';

const DescriptionTabSection = () => {
  const [current, setCurrent] = useState<number>(0);
  return (
    <section>
      <h3 hidden>상세 설명 탭</h3>
      <div className={styles.tabButtons}>
        <button
          className={`${current === 0 ? styles.active : ''}`}
          onClick={() => setCurrent(0)}
        >
          Description
        </button>
        <button
          className={`${current === 1 ? styles.active : ''}`}
          onClick={() => setCurrent(1)}
        >
          Additional Information
        </button>
        <button
          className={`${current === 2 ? styles.active : ''}`}
          onClick={() => setCurrent(2)}
        >
          Reviews(0)
        </button>
      </div>
      <div className={styles.contents}>
        <div
          className={`${styles.content} ${current === 0 ? styles.active : ''}`}
        >
          Description
        </div>
        <div
          className={`${styles.content} ${current === 1 ? styles.active : ''}`}
        >
          Additional Information
        </div>
        <div
          className={`${styles.content} ${current === 2 ? styles.active : ''}`}
        >
          Reviews
        </div>
      </div>
    </section>
  );
};

export default DescriptionTabSection;
