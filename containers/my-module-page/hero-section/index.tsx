import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";
import { redirect } from "next/navigation";
import { getCDNUrl } from "@/utils/functions";
import QuoteBadge from "@/features/courses/QuoteBadge";

const MyModuleHeroSection: React.FC<{
  courseId: number;
  moduleName: string;
  moduleImg?: string;
  description: string;
}> = ({ courseId, moduleName, moduleImg, description }) => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_head}>
          <div className={styles.hero_title}>
            <Button
              secondary
              icon="arrowCircleLeft"
              onClick={() => {
                redirect(`/courses/my/${courseId}`);
              }}
            />
            <h3>{moduleName}</h3>
          </div>
          <Button className={styles.complete_btn}>Завершити модуль</Button>
        </div>
        <QuoteBadge quote={description} img={moduleImg} />
      </div>
    </section>
  );
};

export default MyModuleHeroSection;
