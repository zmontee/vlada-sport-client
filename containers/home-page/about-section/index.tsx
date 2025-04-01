import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";
import clsx from "clsx";

const AboutSection: React.FC = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.about_head}>
          <h2 className={styles.about_title}>Познайомимоcя ближче</h2>
          <div className={styles.description_block}>
            <p className={styles.about_description}>
              Я — дипломований фітнес-тренер із досвідом роботи, який допомагає
              людям досягати своїх фізичних цілей. Мій підхід базується на
              індивідуальності, мотивації та сучасних методах тренувань. Разом
              ми зможемо перетворити ваші мрії в реальні результати!
            </p>
            <Button to="/about" className={styles.read_more}>
              Детальніше
            </Button>
          </div>
        </div>
        <div className={styles.img_frame}>
          <picture className={styles.picture}>
            <img src="/assets/images/sport-bg.jpg" alt="Sport" />
          </picture>
        </div>
        <div className={styles.points}>
          <div className={clsx(styles.point_item, styles.point_item__first)}>
            <h3 className={styles.point_title}>Індивідуальний підхід</h3>
            <p className={styles.point_description}>
              Кожна програма адаптується до твоїх цілей, рівня підготовки та
              особистих потреб
            </p>
            <span className={styles.point_number}>01</span>
          </div>
          <div className={clsx(styles.point_item, styles.point_item__second)}>
            <h3 className={styles.point_title}>Досвід і професіоналізм</h3>
            <p className={styles.point_description}>
              Я — дипломований тренер із реальними результатами клієнтів та
              сучасним підходом до фітнесу
            </p>
            <span className={styles.point_number}>02</span>
          </div>
          <div className={clsx(styles.point_item, styles.point_item__third)}>
            <h3 className={styles.point_title}>Мотивація та підтримка</h3>
            <p className={styles.point_description}>
              На кожному етапі я поруч, щоб допомогти подолати труднощі й
              підтримати на шляху до успіху
            </p>
            <span className={styles.point_number}>03</span>
          </div>
          <div className={clsx(styles.point_item, styles.point_item__fourth)}>
            <h3 className={styles.point_title}>Реальні результати</h3>
            <p className={styles.point_description}>
              Мої методи працюють! Від новачків до досвідчених спортсменів —
              клієнти досягають своїх цілей зі мною
            </p>
            <span className={styles.point_number}>04</span>
          </div>
          <div className={clsx(styles.point_item, styles.point_item__fifth)}>
            <h3 className={styles.point_title}>Перевірені методики</h3>
            <p className={styles.point_description}>
              Я використовую сучасні техніки тренувань, які дають видимі та
              стабільні результати
            </p>
            <span className={styles.point_number}>05</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
