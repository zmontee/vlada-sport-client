import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";

const EducationSection: React.FC = () => {
  return (
    <section className={styles.education}>
      <div className="container">
        <div className={styles.education_head}>
          <h2 className={styles.education_title}>Навчання</h2>
          <p className={styles.education_text}>
            Я дипломований фітнес-тренер із сертифікацією в галузі фізичного
            виховання та здоров’я, що дозволяє мені будувати тренувальні
            програми з урахуванням усіх аспектів фізичної підготовки та безпеки.
            Моя освіта та постійне вдосконалення знань у сфері фітнесу
            забезпечують клієнтам професійний підхід, що ґрунтується на сучасних
            методах і наукових підходах. Кожне тренування розроблено так, щоб не
            лише покращувати фізичну форму, але й підтримувати загальний стан
            здоров’я.
          </p>
        </div>
        <div className={styles.education_gallery}>
          <div className={styles.certificate_block}>
            <img
              className={styles.certificate}
              src="/assets/images/about/certificate.jpg"
              alt="Certificate"
            />
          </div>
          <div className={styles.second_img_block}>
            <img
              className={styles.second_img}
              src="/assets/images/about/about-img-2.jpg"
              alt="Sport"
            />
          </div>
          <div className={styles.third_img_block}>
            <img
              className={styles.third_img}
              src="/assets/images/about/about-img-3.jpg"
              alt="Sport"
            />
          </div>
        </div>
        <div className={styles.courses}>
          <p className={styles.courses_description}>
            Я розробила кілька спеціалізованих курсів, які адаптовані до різних
            рівнів фізичної підготовки й цілей. Кожен курс — це поєднання
            перевірених методик, сучасних тренувальних технік та індивідуального
            підходу, що дозволяє максимально ефективно працювати над тілом і
            здоров'ям. Від базових курсів для новачків до інтенсивних програм
            для тих, хто прагне підвищити свою витривалість або наростити силу,
            — мої курси підходять для кожного, хто хоче досягти реальних
            результатів.
          </p>
          <Button className={styles.courses_btn}>Переглянути курси</Button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
