import React from "react";
import clsx from "clsx";
import styles from "./_styles.module.scss";

const HelloSection: React.FC = () => {
  return (
    <section className={styles.hello}>
      <div className="container">
        <div className={styles.hello_grid}>
          <h2 className={styles.hello_title}>Привіт!</h2>
          <p className={styles.hello_text}>
            Я Влада, сертифікований фітнес-тренер із багаторічним досвідом. Моя
            мета — допомогти кожному знайти свою ідеальну форму, відновити
            здоров’я та відчути справжню силу тіла й духу. У тренуваннях я роблю
            акцент на індивідуальний підхід, що дозволяє розробляти програми,
            які максимально відповідають вашим цілям і фізичним можливостям.
            Разом ми знайдемо найефективніший шлях до вашого ідеального
            результату.
          </p>
          <p className={clsx(styles.hello_text, styles.hello_text_additional)}>
            Я переконана, що фітнес — це більше, ніж просто вправи. Це стиль
            життя, який приносить радість, впевненість і енергію для нових
            звершень. Під час занять я завжди поряд, щоб підтримати, мотивувати
            та допомогти вам розкрити свій потенціал. Не важливо, новачок ви чи
            маєте досвід, — разом ми зможемо досягти нових висот!
          </p>
        </div>
        <div className={styles.img_block}>
          <img
            className={styles.hello_img}
            src="/assets/images/about/about-img-1.jpg"
            alt="Sport"
          />
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
