import styles from './rethree.module.css';

/* eslint-disable-next-line */
export interface RethreeProps {}

export function Rethree(props: RethreeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Rethree!</h1>
    </div>
  );
}

export default Rethree;
