import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";
import type { Feedback } from "@/types/feedback";
import FeedbackShort from "@/features/feedback/FeedbackShort";

const FeedbacksSection: React.FC<{ feedbacks: Feedback[] }> = ({
  feedbacks,
}) => {
  return (
    <section className={styles.feedbacks}>
      <div className="container">
        <div className={styles.feedbacks_head}>
          <h2 className={styles.feedbacks_title}>Відгуки</h2>
          <div className={styles.feedbacks_head_btns}>
            <Button
              secondary
              icon="arrowCircleLeft"
              className={styles.arrow_btn}
            />
            <Button secondary className={styles.write_btn}>
              Залишити відгук
            </Button>
            <Button
              secondary
              icon="arrowCircleRight"
              className={styles.arrow_btn}
            />
          </div>
        </div>
        <div className={styles.feedbacks_list}>
          {feedbacks.slice(0, 3).map((feedback) => (
            <FeedbackShort key={feedback.name} feedback={feedback} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbacksSection;
