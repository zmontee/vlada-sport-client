import React from "react";
import styles from "./_styles.module.scss";
import { EquipmentDTO } from "@/types/dto";
import { getCDNUrl } from "@/utils/functions";

const EquipSection: React.FC<{ equip: EquipmentDTO[]; marginTop?: string }> = ({
  equip,
  marginTop,
}) => {
  return (
    <section className={styles.equip} style={{ marginTop }}>
      <div className="container">
        <h2 className={styles.equip_title}>Необхідний інвентар</h2>
        <div className={styles.equip_list}>
          {equip.map((item) => (
            <div key={item.id} className={styles.equip_item}>
              <img
                src={item.imageUrl ? getCDNUrl(item.imageUrl) : "#"}
                alt={item.name}
                className={styles.equip_item_img}
              />
              <h5 className={styles.equip_item_title}>{item.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipSection;
