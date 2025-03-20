import React from "react";
import styles from "./_styles.module.scss";
import clsx from "clsx";

type CourseCardProps = {
  title: string;
  description: string;
  price: number;
  level: string;
  img: string;
  isActive: boolean;
};

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  price,
  level,
  img,
  isActive,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.mask_container}>
        <div className={styles.background_container}>
          <img
            src={`/assets/images/courses/${img}`}
            alt="Course"
            className={styles.background}
          />
          {!isActive ? (
            <div className={styles.coming_soon}>
              <span>Скоро буде</span>
            </div>
          ) : null}
        </div>
        <div className={styles.card_body}>
          <div className={styles.card_head}>
            <div
              className={clsx(styles.title, {
                [styles.title_disabled]: !isActive,
              })}
            >
              {title}
            </div>
            <div
              className={clsx(styles.price, {
                [styles.price_disabled]: !isActive,
              })}
            >
              {price} ₴
            </div>
          </div>
          <div
            className={clsx(styles.description, {
              [styles.description_disabled]: !isActive,
            })}
          >
            {description}
          </div>
        </div>
      </div>
      <div className={styles.level_wrapper}>
        <div className={styles.level_block}>
          <span>{level}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
