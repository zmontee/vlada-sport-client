"use client";
import React from "react";
import clsx from "clsx";
import { AdditionalService } from "@/types/courses";
import styles from "./_styles.module.scss";

type ServiceProps = {
  service: AdditionalService;
  isEven: boolean;
};

const ServiceItem: React.FC<ServiceProps> = ({ service, isEven }) => {
  return (
    <div className={styles.service_wrapper}>
      <div className={styles.service_item} style={{ zIndex: service.id + 1 }}>
        <span className={styles.serial}>
          {service.id < 10 ? `0${service.id}` : service.id}
        </span>
        <h3 className={styles.title}>{service.title}</h3>
        <p className={styles.price}>{service.price} ₴</p>
      </div>
      <div
        className={clsx(styles.img_block, { [styles.img_block_even]: isEven })}
        style={{ zIndex: service.id + 100 }}
      >
        <img src={service.img} alt="service" className={styles.img} />
      </div>
    </div>
  );
};

export default ServiceItem;
