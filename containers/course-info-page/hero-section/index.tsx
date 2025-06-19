"use client";

import React from "react";
import styles from "./_styles.module.scss";
import { getCDNUrl, pluralize } from "@/utils/functions";
import Button from "@/components/Button";
import { useCartStore } from "@/store/cartStore";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";

type CourseHeroSectionProps = {
  id: number;
  imageUrl?: string;
  title: string;
  description: string;
  duration: string;
  modulesCount: number;
  level: string;
  price: number;
};

const CourseHeroSection: React.FC<CourseHeroSectionProps> = ({
  id,
  imageUrl,
  title,
  description,
  duration,
  modulesCount,
  level,
  price,
}) => {
  const router = useRouter();

  const { isAuth, user } = useAuthStore();
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (isAuth) {
      addItem({
        id,
        title,
        img: imageUrl,
        price,
      });
    } else {
      router.push("/auth");
    }
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.hero_block}>
          <img
            className={styles.hero_background}
            src={
              imageUrl
                ? getCDNUrl(imageUrl)
                : "/assets/images/courses/course-4.jpg"
            }
            alt={title}
          />
          <div className={styles.hero_content}>
            <h1 className={styles.hero_title}>{title}</h1>
            <p className={styles.hero_description}>{description}</p>
            <div className={styles.hero_shorts}>
              {duration} •{" "}
              {pluralize(modulesCount, ["модуль", "модулі", "модулі"])} •{" "}
              {level}
            </div>
            <div className={styles.hero_price}>
              <span className={styles.price_text}>Вартість: </span>
              <span className={styles.price_text}>{price} ₴</span>
            </div>
            <div className={styles.buttons}>
              <Button secondary icon="program">
                Програма курсу
              </Button>
              {user?.purchasedCourses.includes(id) ? (
                <Button icon="arrowCircleRight" to={`/courses/my/${id}`}>
                  До курсу
                </Button>
              ) : (
                <Button icon="shoppingCart" onClick={handleAddToCart}>
                  Придбати
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;
