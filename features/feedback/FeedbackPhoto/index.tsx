import React from "react";
import styles from "./_styles.module.scss";
import clsx from "clsx";

const typeDictionary = {
  before: "До",
  after: "Після",
};

const FeedbackPhoto: React.FC<{
  type: "before" | "after";
  img: string;
}> = ({ type, img }) => {
  return (
    <div
      className={clsx(styles.feedback_photo, styles[`feedback_photo_${type}`])}
    >
      <div className={styles.border_img}>
        <img src={`/assets/images/feedback-mask-${type}.png`} />
      </div>
      <div className={styles.mask_container}>
        <div className={styles.photo_container}>
          <img src={img} alt={`Feedback ${type}`} className={styles.photo} />
        </div>
      </div>
      <div className={styles.photo_bange}>
        <span>{typeDictionary[type]}</span>
      </div>
    </div>
  );
};

export default FeedbackPhoto;
