import React from "react";
import styles from "./_styles.module.scss";
import QuestionForm from "@/features/feedback/QuestionForm";

const QuestionSection: React.FC = () => {
  return (
    <section className={styles.question}>
      <div className="container">
        <div className={styles.question_head}>
          <h2 className={styles.question_title}>Залишились питання?</h2>
          <p className={styles.question_description}>
            Заповніть форму, щоб дізнатися більше про курси та обрати те, що
            підійде саме вам. Я зв’яжусь із вами, щоб відповісти на всі
            запитання й допомогти розпочати ваш шлях до мети!
          </p>
        </div>
        <div className={styles.question_grid}>
          <QuestionForm />
          <div className={styles.question_image}>
            <div className={styles.question_image_overlay} />
            <img src="/assets/images/sport-bg.jpg" alt="Sport" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
