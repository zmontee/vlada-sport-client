import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";
import FeedbackBlock from "@/features/feedback/FeedbackBlock";

const FeedbackSection = () => {
  return (
    <section className={styles.feedback_section}>
      <div className="container">
        <div className={styles.feedback_head}>
          <h2 className={styles.feedback_title}>Відгуки</h2>
          <Button
            iconNode={
              <img
                src="/assets/icons/link.svg"
                className="link_icon"
                alt="link"
              />
            }
            className={styles.all_btn}
          >
            Переглянути всі
          </Button>
        </div>
        <div className={styles.feedback_block}>
          <FeedbackBlock
            feedback={{
              name: "Яна Лайтер",
              experience: "2 роки досвіду",
              message:
                "З Владою я займаюся вже понад 2 роки, і це були найкращі рішення для мого здоров’я та фізичної форми! Завдяки її професіоналізму та індивідуальному підходу я не лише досяг своїх цілей, а й навчився правильно тренуватися та дбати про своє тіло. Кожне заняття проходить цікаво та мотивуюче, а результати говорять самі за себе. Дякую за підтримку і натхнення!",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
