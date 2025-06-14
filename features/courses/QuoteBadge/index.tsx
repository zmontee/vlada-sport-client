import React from "react";
import { getCDNUrl } from "@/utils/functions";
import styles from "./_styles.module.scss";

const QuoteBadge: React.FC<{ quote: string; img?: string }> = ({
  quote,
  img,
}) => {
  return (
    <div className="container">
      <div className={styles.quote}>
        <p className={styles.quote_text}>{quote}</p>
        <div className={styles.quote_img}>
          <img
            src={img ? getCDNUrl(img) : "/assets/images/courses/course-4.jpg"}
            alt="Quote"
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteBadge;
