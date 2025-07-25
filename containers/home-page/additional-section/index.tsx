import React from "react";
import styles from "./_styles.module.scss";
import { additionalData } from "@/utils/config";
import InfoRow from "@/components/InfoRow";

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
          {additionalData.map((item, index) => (
            <InfoRow key={item.order} info={item} isEven={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSection;
