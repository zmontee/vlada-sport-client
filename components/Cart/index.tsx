"use client";
import React, { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";
import { useModal } from "@/hooks/useModal";
import { getCDNUrl } from "@/utils/functions";
import coursesService from "@/services/courses";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import CongratsModal from "@/components/CongratsModal";

const Cart: React.FC = () => {
  const router = useRouter();
  const { closeModal, openModal } = useModal();
  const { items, totalPrice, removeItem, clearCart } = useCartStore();
  const { user } = useAuthStore();

  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      // Simulate a payment process
      const purchaseCourseResponse = await coursesService.purchaseCourses({
        courseIds: items.map((item) => item.id),
        paymentMethod: "TEST",
        paymentId: `TEST-${user?.name}-${user?.surname}`,
      });

      if (purchaseCourseResponse) {
        console.log("purchaseCourseResponse", purchaseCourseResponse);
        clearCart();
        openModal(
          <CongratsModal
            title="Ви успішно придбали курс!"
            message={`Вітаємо! Ти зробив(-ла) перший крок до кращої форми та самопочуття 💥

              Курс уже доступний у твоєму кабінеті.

              Не чекай понеділка — почни тренування вже сьогодні і стань найкращою версією себе`}
            btnText="До курсу"
            btnCallback={() => {
              router.push(
                `/courses/my/${purchaseCourseResponse.data[0].courseId}`,
              );
              closeModal();
            }}
          />,
          { position: "center" },
        );
      }
    } catch (error) {
      console.error("Payment failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={styles.cart}>
      <h4 className={styles.cart_title}>Корзина</h4>
      <div className={styles.cart_grid}>
        <div className={styles.empty} />
        <div className={styles.cart_product_head}>
          <span className={styles.cart_grid_title}>Товар</span>
        </div>
        <div className={styles.cart_price_head}>
          <span className={styles.cart_grid_title}>Ціна</span>
        </div>
        <div className={styles.divider} />
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className={styles.cart_trash}>
              <Button
                secondary
                icon="trash"
                onClick={() => removeItem(item.id)}
                disabled={isProcessing}
              />
            </div>
            <div className={styles.cart_product}>
              <div className={styles.cart_product_img}>
                <img
                  src={
                    item.img
                      ? getCDNUrl(item.img)
                      : "/assets/images/courses/course-4.jpg"
                  }
                  alt={item.title}
                />
              </div>
              <p className={styles.cart_product_title}>{item.title}</p>
            </div>
            <div className={styles.cart_price}>
              <span>{item.price} ₴</span>
            </div>
            {index !== items.length - 1 && <div className={styles.divider} />}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.total}>
        <span className={styles.total_label}>Загалом товарів на суму</span>
        <strong className={styles.total_value}>{totalPrice()} ₴</strong>
      </div>
      <div className={styles.cart_btns}>
        <Button
          className={styles.continue_btn}
          secondary
          onClick={closeModal}
          disabled={isProcessing}
        >
          Продовжити покупки
        </Button>
        <Button
          className={styles.checkout_btn}
          disabled={isProcessing}
          onClick={handleCheckout}
        >
          Сплатити
        </Button>
      </div>
    </div>
  );
};

export default Cart;
