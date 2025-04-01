import React from "react";
import styles from "./_styles.module.scss";
import { Equip } from "@/types/courses";

const EquipSection: React.FC<{ equip: Equip[] }> = ({ equip }) => {
  return (
    <section className={styles.equip}>
      <div className="container">
        <h2 className={styles.equip_title}>Необхідний інвентар</h2>
        <div className={styles.equip_list}>
          {equip.map((item) => (
            <div key={item.id} className={styles.equip_item}>
              <img
                src={item.img}
                alt={item.title}
                className={styles.equip_item_img}
              />
              <h5 className={styles.equip_item_title}>{item.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipSection;
