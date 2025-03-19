import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_block}>
          <picture className={styles.hero_bg}>
            <img src="/assets/images/hero-bg.png" alt="hero" />
          </picture>
          <div className={styles.hero_content}>
            <span className={styles.hero_label}>
              Тренуйся. Розвивайся. Досягай.
            </span>
            <h1 className={styles.hero_title}>Зроби перший крок до змін</h1>
            <div className={styles.hero_nav}>
              <Button
                iconNode={
                  <img
                    src="/assets/icons/link.svg"
                    alt="arrow-right"
                    className={styles.icon}
                  />
                }
                iconPosition="right"
                to="#"
                className={styles.courses_btn}
              >
                Переглянути курси
              </Button>
              <Button secondary className={styles.about_btn}>
                Про мене
              </Button>
            </div>
          </div>
          <div className={styles.info_block}>
            <div className={styles.info_item}>
              <h2>7+</h2>
              <span>Років досвіду</span>
            </div>
            <div className={styles.info_item}>
              <h2>100+</h2>
              <span>Щасливих клієнтів</span>
            </div>
            <div className={styles.info_item}>
              <h2>∞</h2>
              <span>Уваги до вас</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
