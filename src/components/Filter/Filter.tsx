import styles from './Filter.module.css';

interface Props {
  current: FilterValue | null;
  update: (filter: FilterValue | null) => void;
}

const filterList = [
  { title: '등록순', value: 'created' },
  { title: '낮은 가격', value: 'price' },
  { title: '높은 가격', value: '-price' },
  { title: '높은 할인율', value: '-discount' },
] as const;
type FilterValue = (typeof filterList)[number]['value'];

const Filter = ({ current, update }: Props) => {
  return (
    <nav className={styles.filter}>
      {filterList.map((filter) => (
        <button
          key={`filter_${filter.value}`}
          className={`${current === filter.value ? styles.active : ''}`}
          onClick={() => update(current === filter.value ? null : filter.value)}
        >
          {filter.title}
        </button>
      ))}
    </nav>
  );
};

export default Filter;
export type { FilterValue };
