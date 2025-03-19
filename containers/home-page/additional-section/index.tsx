import React from "react";
import styles from "./_styles.module.scss";
import { additionalData } from "@/utils/mockData";

const AdditionalSection: React.FC = () => {
  return (
    <section className={styles.additional}>
      <div className="container">
        {" "}
        <div className={styles.additional_head}>
          <h2 className={styles.additional_title}>Додаткові послуги</h2>
          <p className={styles.additional_description}>
            Окрім основних курсів, я пропоную додаткові послуги, які допоможуть
            зробити ваш шлях до мети ще ефективнішим. Від персональних
            консультацій і розробки індивідуальних програм до фітнес-марафонів
            та підтримки онлайн — усе для вашого комфорту та максимального
            результату.
          </p>
        </div>
        <div className={styles.additional_list}>
          {additionalData.map((item) => (
            <div key={item.id} className={styles.additional_item}>
              <span className={styles.serial}>0{item.id}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.price}>{item.price} ₴</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSection;
