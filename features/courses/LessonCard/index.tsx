import React from "react";
import { UserModuleLesson } from "@/types/courses";
import Link from "next/link";
import styles from "./_styles.module.scss";
import { getCDNUrl } from "@/utils/functions";
import Icon from "@/components/Icon";

const LessonCard: React.FC<{
  courseId: number;
  lesson: UserModuleLesson;
  isLocked: boolean;
}> = ({ courseId, lesson, isLocked }) => {
  return (
    <Link
      href={`/courses/my/${courseId}/modules/${lesson.moduleId}/lessons/${lesson.id}`}
    >
      <div className={styles.lesson}>
        <div className={styles.lesson_img}>
          <img
            src={
              lesson.imageUrl
                ? getCDNUrl(lesson.imageUrl)
                : "/assets/courses/course-3.jpg"
            }
            alt={lesson.title}
          />
          {isLocked && (
            <div className={styles.lesson_lock}>
              <Icon name="lock" className={styles.lesson_lock_icon} />
              <span>Для доступу до цього уроку пройдіть попередній урок</span>
            </div>
          )}
        </div>
        <span className={styles.lesson_name}>{lesson.title}</span>
      </div>
    </Link>
  );
};

export default LessonCard;
