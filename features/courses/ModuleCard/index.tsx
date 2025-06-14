import React from "react";
import styles from "./_styles.module.scss";
import { ModuleDTO } from "@/types/dto";
import Icon from "@/components/Icon";
import { UserCourseModule } from "@/types/courses";
import { getCDNUrl } from "@/utils/functions";
import Link from "next/link";

const ModuleCard: React.FC<{
  module: UserCourseModule;
  isLocked: boolean;
  prevModuleName: string;
}> = ({ module, isLocked, prevModuleName }) => {
  return (
    <Link href={`/courses/my/${module.courseId}/modules/${module.id}`}>
      <div className={styles.module}>
        <div className={styles.module_img}>
          <img
            src={
              module.imageUrl
                ? getCDNUrl(module.imageUrl)
                : "/assets/courses/course-4.jpg"
            }
            alt={module.title}
          />
          {isLocked && (
            <div className={styles.module_lock}>
              <Icon name="lock" className={styles.module_lock_icon} />
              <span>
                Для доступу до цього модуля пройдіть модуль &quot;
                {prevModuleName}
                &quot;
              </span>
            </div>
          )}
        </div>
        <span className={styles.module_name}>{module.title}</span>
      </div>
    </Link>
  );
};

export default ModuleCard;
