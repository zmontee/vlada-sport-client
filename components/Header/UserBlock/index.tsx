"use client";

import React from "react";
import useAuthStore from "@/store/authStore";
import styles from "./_styles.module.scss";
import Button from "@/components/Button";

const UserBlock = () => {
  const { isAuth, user } = useAuthStore();

  return isAuth ? (
    <div>User</div>
  ) : (
    <div className={styles.auth_block}>
      <Button secondary to="/auth">
        Вхід
      </Button>
      <Button>Реєстрація</Button>
    </div>
  );
};

export default UserBlock;
