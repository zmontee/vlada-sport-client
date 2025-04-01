import React from "react";
import type { Program } from "@/types/courses";
import styles from "./_styles.module.scss";
import InfoRow from "@/components/InfoRow";

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
                id: item.id,
                title: item.title,
                subtitle: `${item.lessonsCount} занять`,
                img: item.img,
              }}
              isEven={index % 2 === 0}
            />
            // <div key={item.id} className={styles.program_item}>
            //   <span className={styles.program_item_number}>
            //     {`${index + 1 <= 10 ? "0" : ""}${index + 1}`}
            //   </span>
            //   <h4 className={styles.program_item_title}>{item.title}</h4>
            //   <p className={styles.program_item_count}>
            //     {item.lessonsCount} занять
            //   </p>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
