import React from "react";
import styles from "./_styles.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { CourseDTO } from "@/types/dto";
import { BASE_URL } from "@/lib/axios";

type CourseCardProps = {
  course: CourseDTO;
  isActive: boolean;
};

const CourseCard: React.FC<CourseCardProps> = ({ course, isActive }) => {
  const { title, description, price, level, imageUrl } = course;

  return (
    <Link href={`/courses/${course.id}`} className={styles.card}>
      <div className={styles.background_container}>
        <img
          src={`${BASE_URL}${imageUrl}`}
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
      <div className={styles.level_block}>
        <span>{level}</span>
      </div>
    </Link>
  );
};

export default CourseCard;
