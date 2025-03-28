import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";

const ResultsSection = () => {
  return (
    <section className={styles.results}>
      <div className="container">
        <h2 className={styles.results_title}>Результати</h2>
        <div className={styles.results_gallery}>
          <div className={styles.results_main_img_block}>
            <img
              className={styles.img}
              src="/assets/images/about/about-img-4.jpg"
              alt="Sport"
            />
          </div>
          <div className={styles.results_img_block}>
            <img
              className={styles.img}
              src="/assets/images/about/about-img-5.jpg"
              alt="Sport"
            />
          </div>
          <div className={styles.results_img_block}>
            <img
              className={styles.img}
              src="/assets/images/about/about-img-6.jpg"
              alt="Sport"
            />
          </div>
        </div>
        <div className={styles.feedback}>
          <p className={styles.feedback_description}>
            Задоволені клієнти та їхні результати — це те, що надихає мене
            продовжувати вдосконалювати свою роботу. За роки роботи тренером я
            мала честь допомогти багатьом людям трансформувати своє життя: від
            втрати ваги й нарощування м’язової маси до досягнення витривалості
            та покращення загального самопочуття. Бачити, як клієнти досягають
            своїх цілей і відчувають упевненість у собі, — для мене це найвища
            нагорода.
          </p>
          <Button className={styles.feedback_btn}>Переглянути відгуки</Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
