import React from "react";
import ModuleCard from "@/features/courses/ModuleCard";
import { UserCourseModule } from "@/types/courses";
import styles from "./_styles.module.scss";

const ModulesSection: React.FC<{ modules: UserCourseModule[] }> = ({
  modules,
}) => {
  return (
    <section className={styles.modules}>
      <div className="container">
        <h2 className={styles.modules_title}>Усі модулі</h2>
        <div className={styles.modules_list}>
          {modules.map((module, index) => (
            <ModuleCard
              key={module.id}
              module={module}
              isLocked={module.progress.isLocked}
              prevModuleName={
                index !== 0 ? modules[index - 1].title : module.title
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
