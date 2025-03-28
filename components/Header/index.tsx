import Link from "next/link";
import styles from "./_styles.module.scss";
import UserBlock from "@/components/Header/UserBlock";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left_block}>
        <Link href="/" className={styles.logo}>
          <img src="/assets/images/logo.png" alt="Logo" />
        </Link>
        <nav className={styles.navigation}>
          <Link href="/about" className={styles.navigation_item}>
            <span>Про нас</span>
          </Link>
          <Link href="#" className={styles.navigation_item}>
            <span>Курси</span>
          </Link>
          <Link href="#" className={styles.navigation_item}>
            <span>Відгуки</span>
          </Link>
        </nav>
      </div>
      <UserBlock />
    </header>
  );
};

export default Header;
