import styles from './retwo.module.css';

/* eslint-disable-next-line */
export interface RetwoProps {}

export function Retwo(props: RetwoProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Retwo!</h1>
    </div>
  );
}

export default Retwo;
