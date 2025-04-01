import React from "react";
import styles from "./_styles.module.scss";
import { coursesCards } from "@/utils/mockData";
import CourseCard from "@/features/courses/CourseCard";

const CoursesListSection: React.FC = () => {
  return (
    <section className={styles.courses}>
      <div className="container">
        <h1 className={styles.courses_title}>Всі курси</h1>
        <div className={styles.courses_grid}>
          {coursesCards.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              price={course.price}
              level={course.level}
              img={course.img}
              isActive={course.isActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesListSection;
