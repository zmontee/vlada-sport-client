import React from "react";
import styles from "./_styles.module.scss";
import { pluralize } from "@/utils/functions";
import Button from "@/components/Button";

type CourseHeroSectionProps = {
  img: string;
  title: string;
  mainDescription: string;
  length: string;
  modulesCount: number;
  level: string;
  price: number;
};

const CourseHeroSection: React.FC<CourseHeroSectionProps> = ({
  img,
  title,
  mainDescription,
  length,
  modulesCount,
  level,
  price,
}) => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_block}>
          <img className={styles.hero_background} src={img} alt={title} />
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>{title}</h1>
            <p className={styles.hero_description}>{mainDescription}</p>
            <div className={styles.hero_shorts}>
              {length} • {modulesCount}{" "}
              {pluralize(modulesCount, ["модуль", "модулі", "модулі"])} •{" "}
              {level}
            </div>
            <div className={styles.hero_price}>
              <span className={styles.price_text}>Вартість: </span>
              <span className={styles.price_text}>{price} ₴</span>
            </div>
            <div className={styles.buttons}>
              <Button secondary icon="program">
                Програма курсу
              </Button>
              <Button icon="shoppingCart">Придбати</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;
