import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";
import FeedbackBlock from "@/features/feedback/FeedbackBlock";
import { Feedback } from "@/types/feedback";

const FeedbackSection: React.FC<{ feedbacks?: Feedback[] }> = ({
  feedbacks,
}) => {
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
              id: 7,
              rating: 5,
              comment:
                "Тут усе — з такою любов’ю! Тренування м’які, але ефективні, після них я не валяюсь без сил, а навпаки — відчуваю легкість і радість. Нарешті зникло відчуття, що я “щось винна” своєму тілу.",
              createdAt: "2025-04-16T09:50:42.909Z",
              userId: 14,
              courseId: 18,
              user: {
                name: "Адміністратор",
                surname: "Системи",
                imageUrl: "/cdn/images/sport-admin.jpg",
                experience: "професійний",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
