import React from "react";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";

const CongratsModal: React.FC<{
  title: string;
  message: string;
  btnText?: string;
  btnCallback?: () => void;
}> = ({ title, message, btnText, btnCallback }) => {
  return (
    <div className={styles.congrats}>
      <img
        src="/assets/images/confetti.png"
        className={styles.confetti}
        alt="confetti"
      />
      <div className={styles.congrats_body}>
        <div className={styles.congrats_text}>
          <h5 className={styles.congrats_title}>{title}</h5>
          <p className={styles.congrats_message}>{message}</p>
        </div>
        {btnText && btnCallback && (
          <Button onClick={btnCallback} className={styles.congrats_btn}>
            {btnText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CongratsModal;
