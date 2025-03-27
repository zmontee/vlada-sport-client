import React from "react";
import styles from "./_styles.module.scss";
import Link from "next/link";
import clsx from "clsx";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_grid}>
        <Link href="/" className={styles.logo}>
          <img src="/assets/images/logo.png" alt="Logo" />
        </Link>
        <div className={clsx(styles.footer_group, styles.footer_group_menu)}>
          <div className={styles.footer_group_header}>
            <h3 className={styles.footer_group_title}>Меню</h3>
          </div>
          <nav className={styles.footer_nav}>
            <Link href="#" className={styles.footer_nav_link}>
              <span>Головна</span>
            </Link>
            <Link href="#" className={styles.footer_nav_link}>
              <span>Про нас</span>
            </Link>
            <Link href="#" className={styles.footer_nav_link}>
              <span>Курси</span>
            </Link>
            <Link href="#" className={styles.footer_nav_link}>
              <span>Відгуки</span>
            </Link>
          </nav>
        </div>
        <div
          className={clsx(styles.footer_group, styles.footer_group_contacts)}
        >
          <div className={styles.footer_group_header}>
            <h3 className={styles.footer_group_title}>Контакти</h3>
          </div>
          <div className={styles.footer_contacts}>
            <a
              href="tel:+380-99-999-99-60"
              className={styles.footer_contacts_item}
            >
              +380-99-999-99-60
            </a>
            <a
              href="tel:+380-99-999-99-60"
              className={styles.footer_contacts_item}
            >
              +380-99-999-99-60
            </a>
            <a
              href="mailto:example@gmail.com"
              className={styles.footer_contacts_item}
            >
              example@gmail.com
            </a>
          </div>
        </div>
        <div
          className={clsx(styles.footer_group, styles.footer_group_location)}
        >
          <div className={styles.footer_group_header}>
            <h3 className={styles.footer_group_title}>Місцезнаходження</h3>
          </div>
          <p className={styles.footer_location}>
            Україна,
            <br />
            Черкаська обл,
            <br />
            м. Монастирище,
            <br />
            вул. Соборна, 1
          </p>
        </div>
      </div>
      <hr className={styles.footer_divider} />
      <div className={styles.footer_bottom}>
        <h4>
          &quot;Vladislava&quot; | {new Date().getFullYear()} | Всі права
          захищені
        </h4>
        <h4>Created by Denys Koshovoy</h4>
      </div>
    </footer>
  );
};

export default Footer;
