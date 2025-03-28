import React from "react";
import styles from "./_styles.module.scss";

const AboutHeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_block}>
          <img
            className={styles.hero_img}
            src="/assets/images/about/about-hero.jpg"
            alt="hero"
          />
          <h1 className={styles.hero_title}>
            Тренування, які підходять саме вам. Розкрийте свій потенціал разом
            зі мною!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
