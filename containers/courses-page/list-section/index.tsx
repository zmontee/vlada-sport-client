import React from "react";
import styles from "./_styles.module.scss";
import CourseCard from "@/features/courses/CourseCard";
import { CourseDTO } from "@/types/dto";

const CoursesListSection: React.FC<{ list: CourseDTO[] }> = ({ list }) => {
  return (
    <section className={styles.courses}>
      <div className="container">
        <h1 className={styles.courses_title}>Всі курси</h1>
        <div className={styles.courses_grid}>
          {list.map((course) => (
            <CourseCard key={course.id} course={course} isActive={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesListSection;
