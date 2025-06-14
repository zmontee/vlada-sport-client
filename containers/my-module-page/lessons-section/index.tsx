import React from "react";
import { UserModuleLesson } from "@/types/courses";
import styles from "./_styles.module.scss";
import LessonCard from "@/features/courses/LessonCard";

const LessonsSection: React.FC<{
  lessons: UserModuleLesson[];
  courseId: number;
}> = ({ lessons, courseId }) => {
  return (
    <section className={styles.lessons}>
      <div className="container">
        <h2 className={styles.lessons_title}>Усі уроки</h2>
        <div className={styles.lessons_list}>
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isLocked={lesson.progress.isLocked}
              courseId={courseId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
