import React from "react";
import { Feedback } from "@/types/feedback";
import styles from "./_styles.module.scss";

const FeedbackShort: React.FC<{ feedback: Feedback }> = ({
  feedback: {
    user: { name, experience },
    comment,
  },
}) => {
  return (
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
      <p className={styles.message}>{comment}</p>
    </div>
  );
};

export default FeedbackShort;
