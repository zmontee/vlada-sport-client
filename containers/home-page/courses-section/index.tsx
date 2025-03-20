import React from "react";
import CourseCard from "../../../features/courses/CourseCard";
import Button from "@/components/Button";
import { coursesCards } from "@/utils/mockData";
import styles from "./_styles.module.scss";

const CoursesSection = () => {
  return (
    <section className={styles.courses}>
      <div className="container">
        <div className={styles.courses_head}>
          <h2 className={styles.courses_title}>Курси</h2>
          <Button
            iconNode={
              <img
                src="/assets/icons/link.svg"
                className="link_icon"
                alt="link"
              />
            }
            className={styles.all_btn}
          >
            Переглянути всі
          </Button>
        </div>
        <div className={styles.courses_grid}>
          {coursesCards.map((card) => (
            <CourseCard
              key={card.id}
              title={card.title}
              description={card.description}
              price={card.price}
              level={card.level}
              img={card.img}
              isActive={card.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
