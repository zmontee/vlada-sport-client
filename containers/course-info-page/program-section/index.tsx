import React from "react";
import type { Program } from "@/types/courses";
import styles from "./_styles.module.scss";
import InfoRow from "@/components/InfoRow";
import { getCDNUrl } from "@/utils/functions";

const ProgramSection: React.FC<{ program: Program[] }> = ({ program }) => {
  return (
    <section className={styles.program}>
      <div className="container">
        <h3 className={styles.program_title}>Програма курсу</h3>
        <div className={styles.program_list}>
          {program.map((item, index) => (
            <InfoRow
              key={item.id}
              info={{
                order: item.orderIndex,
                title: item.title,
                subtitle: `${item._count.lessons} занять`,
                img: item.imageUrl
                  ? getCDNUrl(item.imageUrl)
                  : "/assets/images/courses/course-4.jpg",
              }}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
