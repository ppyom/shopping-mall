import styles from './Counter.module.css';

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
  min?: number;
  max?: number;
}

const Counter = ({ count, increment, decrement, min = 1, max }: Props) => {
  return (
    <div className={styles.counter}>
      <button onClick={decrement} disabled={count === min}>
        -
      </button>
      <span>{count}</span>
      <button onClick={increment} disabled={!!max && count === max}>
        +
      </button>
    </div>
  );
};

export default Counter;
