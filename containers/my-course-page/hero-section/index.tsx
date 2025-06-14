import React from "react";
import styles from "./_styles.module.scss";
import { UserCourseProgress } from "@/types/courses";
import Icon from "@/components/Icon";
import { getCDNUrl } from "@/utils/functions";
import Link from "next/link";

const MyCourseHeroSection: React.FC<{
  progress: UserCourseProgress;
  courseDescription: string;
  courseImg?: string;
}> = ({ progress, courseDescription, courseImg }) => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_grid}>
          <Link
            href={`/courses/my/${progress.courseId}/modules/${progress.currentModule.id}`}
          >
            <div className={styles.module}>
              <div className={styles.module_img}>
                {progress.currentModule.imageUrl && (
                  <img
                    src={getCDNUrl(progress.currentModule.imageUrl)}
                    alt={progress.currentModule.title}
                  />
                )}
              </div>
              <div className={styles.module_body}>
                <div className={styles.module_text}>
                  <span className={styles.module_title}>
                    Ваш поточний модуль
                  </span>
                  <h5 className={styles.module_name}>
                    {progress.currentModule.title}
                  </h5>
                </div>
                <Icon name="link" className={styles.module_link} />
              </div>
            </div>
          </Link>
          <div className={styles.about}>
            <p className={styles.about_text}>{courseDescription}</p>
            <div className={styles.course_img}>
              {courseImg && <img src={getCDNUrl(courseImg)} alt="course" />}
            </div>
          </div>
          <div className={styles.progress}>
            <span className={styles.progress_title}>Прогрес по курсу</span>
            <div className={styles.progress_bar_container}>
              <div
                className={styles.progress_bar_fill}
                style={{ width: `${progress.progressPercent}%` }}
              >
                <span className={styles.progress_tooltip}>
                  {progress.progressPercent}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCourseHeroSection;
