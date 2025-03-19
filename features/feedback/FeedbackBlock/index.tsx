import React from "react";
import styles from "./_styles.module.scss";
import { Feedback } from "@/types/feedback";
import Button from "@/components/Button";
import FeedbackPhoto from "@/features/feedback/FeedbackPhoto";

const FeedbackBlock: React.FC<Feedback> = ({
  // id,
  name,
  // profileImg,
  experience,
  message,
  // beforeImg,
  // afterImg,
}) => {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedback_left}>
        <div className={styles.feedback_body}>
          <div className={styles.profile}>
            <div className={styles.profile_picture}>
              <img src="/assets/images/yana_lighter.png" alt={name} />
            </div>
            <div className={styles.profile_info}>
              <span className={styles.profile_name}>{name}</span>
              <span className={styles.profile_experience}>{experience}</span>
            </div>
          </div>
          <div className={styles.divider} />
          <p className={styles.message}>{message}</p>
        </div>
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
