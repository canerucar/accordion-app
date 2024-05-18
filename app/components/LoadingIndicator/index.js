import styles from './index.module.scss';

export default function LoadingIndicator() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
      <p>Loading...</p>
    </div>
  );
}
