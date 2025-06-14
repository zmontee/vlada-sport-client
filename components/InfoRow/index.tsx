"use client";
import React from "react";
import clsx from "clsx";
import { InfoRow } from "@/types/courses";
import styles from "./_styles.module.scss";

type InfoRowProps = {
  info: InfoRow;
  isEven: boolean;
};

const InfoItem: React.FC<InfoRowProps> = ({ info, isEven }) => {
  return (
    <div className={styles.info_wrapper}>
      <div className={styles.info_item} style={{ zIndex: info.order + 1 }}>
        <span className={styles.serial}>
          {info.order < 10 ? `0${info.order}` : info.order}
        </span>
        <h4 className={styles.title}>{info.title}</h4>
        <p className={styles.subtitle}>{info.subtitle}</p>
      </div>
      <div
        className={clsx(styles.img_block, { [styles.img_block_even]: isEven })}
        style={{ zIndex: info.order }}
      >
        <img src={info.img} alt="info" className={styles.img} />
      </div>
    </div>
  );
};

export default InfoItem;
