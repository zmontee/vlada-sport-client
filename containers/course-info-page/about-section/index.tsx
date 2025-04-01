import React from "react";
import styles from "./_styles.module.scss";
import { Benefit } from "@/types/courses";

const CourseAboutSection: React.FC<{
  benefits: Benefit[];
  audience: string[];
}> = ({ benefits, audience }) => {
  return (
    <section className={styles.about}>
      <div className="container">
        <p className={styles.about_text}>
          Цей курс створений для тих, хто прагне досягти видимих результатів у
          короткі терміни та покращити загальний фізичний стан. Завдяки
          поєднанню силових і кардіотренувань ви зможете підвищити витривалість,
          покращити тонус м’язів і відчути справжню енергію вже після кількох
          тижнів занять
        </p>
        <div className={styles.about_block}>
          <h2 className={styles.about_block_title}>
            Що ви отримаєте від курсу?
          </h2>
          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <div className={styles.benefit} key={benefit.id}>
                <div className={styles.benefit_icon} />
                <h5 className={styles.benefit_title}>{benefit.title}</h5>
                <p className={styles.benefit_description}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.about_block}>
          <h2 className={styles.about_block_title}>Кому стане в пригоді</h2>
          <div className={styles.audience}>
            {audience.map((item) => (
              <div key={item} className={styles.audience_item}>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseAboutSection;
