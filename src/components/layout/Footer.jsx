import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Tito Zwane</span>
      <span>Make the work clear. Make Tito weird.</span>
    </footer>
  );
}
