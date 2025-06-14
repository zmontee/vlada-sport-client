"use client";

import React, { useEffect } from "react";
import useAuthStore from "@/store/authStore";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";
import clsx from "clsx";
import { useCartStore } from "@/store/cartStore";
import { useModal } from "@/hooks/useModal";
import Cart from "@/components/Cart";
import AuthModal from "@/features/auth/AuthModal";

const UserBlock = () => {
  const { isAuth } = useAuthStore();
  const { items } = useCartStore();
  const { openModal } = useModal();

  const handleCartClick = () => {
    if (items.length > 0) {
      openModal(<Cart />, {
        position: "center",
        width: "100%",
        height: "100%",
      });
    }
  };

  return isAuth ? (
    <div className={clsx(styles.user_block, styles.user_block_auth)}>
      <Button className={styles.profile_btn} to="/profile">
        Мій профіль
      </Button>
      <div className={styles.cart_wrapper}>
        <Button
          className={styles.cart_btn}
          secondary
          icon="shoppingCart"
          onClick={handleCartClick}
        />
        {items.length > 0 ? (
          <div className={styles.count}>{items.length}</div>
        ) : null}
      </div>
    </div>
  ) : (
    <div className={styles.user_block}>
      <Button
        secondary
        onClick={() => {
          openModal(<AuthModal />, {
            position: "right",
            top: "48px",
            right: "24px",
          });
        }}
        className={styles.auth_btn}
      >
        Вхід
      </Button>
      <Button className={styles.auth_btn}>Реєстрація</Button>
    </div>
  );
};

export default UserBlock;
