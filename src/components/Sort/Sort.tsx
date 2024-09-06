import styles from './SORT.module.css';
import { sortOptionList, type SortOption } from '../../types/sort.ts';

interface Props {
  current: SortOption | null;
  update: (filter: SortOption | null) => void;
}

const Sort = ({ current, update }: Props) => {
  return (
    <nav className={styles.sort}>
      {sortOptionList.map(({ id, option, label }) => (
        <button
          key={`sort_${id}`}
          className={`${current === option ? styles.active : ''}`}
          onClick={() => update(current === option ? null : option)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default Sort;
