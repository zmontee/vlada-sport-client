import React from "react";
import CourseCard from "../../../features/courses/CourseCard";
import Button from "@/components/Button";
import styles from "./_styles.module.scss";
import type { CourseDTO } from "@/types/dto";

const CoursesSection: React.FC<{ courses: CourseDTO[] }> = ({ courses }) => {
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
            to="/courses"
          >
            Переглянути всі
          </Button>
        </div>
        <div className={styles.courses_grid}>
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} isActive={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
