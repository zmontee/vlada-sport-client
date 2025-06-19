"use client";
import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import QuoteBadge from "@/features/courses/QuoteBadge";
import progressService from "@/services/progress";

const MyModuleHeroSection: React.FC<{
  courseId: number;
  moduleId: number;
  isCompleted: boolean;
  moduleName: string;
  moduleImg?: string;
  description: string;
}> = ({
  courseId,
  moduleId,
  isCompleted,
  moduleName,
  moduleImg,
  description,
}) => {
  const router = useRouter();

  const handleCompleteModule = async () => {
    await progressService.completeModule(moduleId);
    router.replace(`/courses/my/${courseId}`);
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_head}>
          <div className={styles.hero_title}>
            <Button
              secondary
              icon="arrowCircleLeft"
              onClick={() => {
                router.replace(`/courses/my/${courseId}`);
              }}
            />
            <h3>{moduleName}</h3>
          </div>
          {!isCompleted && (
            <Button
              className={styles.complete_btn}
              onClick={handleCompleteModule}
            >
              Завершити модуль
            </Button>
          )}
        </div>
        <QuoteBadge quote={description} img={moduleImg} />
      </div>
    </section>
  );
};

export default MyModuleHeroSection;
