"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useCartStore } from "@/store/cartStore";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import aboutStyles from "@/containers/course-info-page/about-section/_styles.module.scss";
import Button from "@/components/Button";
import styles from "./_styles.module.scss";
import { getCDNUrl } from "@/utils/functions";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";

const CourseBadge: React.FC<{
  id: number;
  img?: string;
  title: string;
  price: number;
}> = ({ id, img, title, price }) => {
  const router = useRouter();
  const badgeRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const portalContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const { isAuth } = useAuthStore();
  const { addItem } = useCartStore();

  // Create portal container on mount
  useEffect(() => {
    const container = document.createElement("div");
    container.id = "course-badge-container";
    document.body.appendChild(container);
    portalContainerRef.current = container;
    setMounted(true);

    return () => {
      // Clean up ScrollTrigger instance
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      // Remove portal container on unmount
      if (
        portalContainerRef.current &&
        document.body.contains(portalContainerRef.current)
      ) {
        document.body.removeChild(portalContainerRef.current);
      }
    };
  }, []);

  useGSAP(() => {
    if (!mounted || !badgeRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const benefitsSection = document.querySelector(`.${aboutStyles.benefits}`);
    if (!benefitsSection) return;

    // Position the badge initially
    const benefitsSectionRect = benefitsSection.getBoundingClientRect();
    gsap.set(badgeRef.current, {
      position: "absolute",
      top: benefitsSectionRect.top + 120,
      duration: 0,
      // left: "50%",
    });

    // Create ScrollTrigger for animation
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: benefitsSection,
      start: `bottom bottom-=${badgeRef.current.offsetHeight - 90}px`,
      endTrigger: "body",
      end: "bottom top",
      onEnter: () => {
        gsap.to(badgeRef.current, {
          position: "fixed",
          top: "auto",
          bottom: "20px",
          duration: 0,
          className: `${styles.badge} ${styles.badge_sticky}`,
        });
      },
      onLeaveBack: () => {
        gsap.to(badgeRef.current, {
          position: "absolute",
          top: benefitsSectionRect.top + 120,
          duration: 0,
          // bottom: "auto",
          className: styles.badge,
        });
      },
    });

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [mounted]);

  const handleAddToCart = () => {
    if (isAuth) {
      addItem({
        id,
        title,
        img,
        price,
      });
    } else {
      router.push("/auth");
    }
  };

  if (!mounted || !portalContainerRef.current) return null;

  return ReactDOM.createPortal(
    <div ref={badgeRef} className={styles.badge}>
      <div className={styles.badge_img_wrapper}>
        <img
          src={img ? getCDNUrl(img) : "/assets/images/courses/course-4.jpg"}
          alt="Course"
          className={styles.badge_img}
        />
      </div>
      <div className={styles.badge_body}>
        <h4 className={styles.badge_title}>{title}</h4>
        <div className={styles.divider} />
        <h4 className={styles.badge_price}>{price} ₴</h4>
      </div>
      <Button className={styles.buy_btn} onClick={handleAddToCart}>
        Придбати
      </Button>
    </div>,
    portalContainerRef.current,
  );
};

export default CourseBadge;
