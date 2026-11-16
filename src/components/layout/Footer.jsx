import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Tito Zwane</span>
      <span> I build things for the web. </span>
    </footer>
  );
}
