"use client";
import React, { useEffect, useRef } from "react";
import styles from "./_styles.module.scss";
import aboutStyles from "../../../containers/course-info-page/about-section/_styles.module.scss";
import Button from "@/components/Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactDOM from "react-dom";

const CourseBadge: React.FC<{ img: string; title: string; price: number }> = ({
  img,
  title,
  price,
}) => {
  const badgeRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = React.useState(false);

  // Handle client-side rendering only
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useGSAP(() => {
    if (!mounted) return;

    gsap.registerPlugin(ScrollTrigger);

    const benefitsSection = document.querySelector(`.${aboutStyles.benefits}`);
    if (!benefitsSection || !badgeRef.current) return;

    benefitsSection.appendChild(badgeRef.current);

    ScrollTrigger.create({
      trigger: benefitsSection,
      start: `bottom bottom-=${badgeRef.current.offsetHeight - 90}px`,
      endTrigger: "body",
      end: "bottom top",
      onEnter: () => {
        document.body.appendChild(badgeRef.current!);
        badgeRef.current!.classList.add(styles.badge_sticky);
      },
      onLeaveBack: () => {
        badgeRef.current!.classList.remove(styles.badge_sticky);
        benefitsSection.appendChild(badgeRef.current!);
      },
    });
  }, [mounted]);

  return mounted
    ? ReactDOM.createPortal(
        <div ref={badgeRef} className={styles.badge}>
          <div className={styles.badge_img_wrapper}>
            <img src={img} alt="Course" className={styles.badge_img} />
          </div>
          <div className={styles.badge_body}>
            <h4 className={styles.badge_title}>{title}</h4>
            <div className={styles.divider} />
            <h4 className={styles.badge_price}>{price} ₴</h4>
          </div>
          <Button className={styles.buy_btn}>Придбати</Button>
        </div>,
        document.body,
      )
    : null;
};

export default CourseBadge;
