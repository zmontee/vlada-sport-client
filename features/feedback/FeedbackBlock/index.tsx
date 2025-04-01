import React from "react";
import styles from "./_styles.module.scss";
import { Feedback } from "@/types/feedback";
import Button from "@/components/Button";
import FeedbackPhoto from "@/features/feedback/FeedbackPhoto";
import FeedbackShort from "@/features/feedback/FeedbackShort";

const FeedbackBlock: React.FC<{ feedback: Feedback }> = ({ feedback }) => {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedback_left}>
        <FeedbackShort feedback={feedback} />
        <div className={styles.feedback_footer}>
          <Button
            className={styles.footer_btn}
            iconNode={
              <img
                src="/assets/icons/arrow-circle-left.svg"
                className="link_icon"
                alt="left"
              />
            }
            iconPosition="left"
          >
            Попередній
          </Button>
          <Button
            className={styles.footer_btn}
            iconNode={
              <img
                src="/assets/icons/arrow-circle-right.svg"
                className="link_icon"
                alt="right"
              />
            }
            iconPosition="right"
          >
            Наступний
          </Button>
        </div>
      </div>
      <div className={styles.feedback_right}>
        <FeedbackPhoto type="before" img="/assets/images/before.png" />
        <FeedbackPhoto type="after" img="/assets/images/after.png" />
      </div>
    </div>
  );
};

export default FeedbackBlock;
