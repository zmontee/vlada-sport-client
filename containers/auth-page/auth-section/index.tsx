import React from "react";
import AuthForm from "@/features/auth/AuthForm";
import styles from "./_styles.module.scss";
import RegisterForm from "@/features/auth/RegisterForm";

const AuthSection: React.FC<{ type: "login" | "register" | "reset" }> = ({
  type = "login",
}) => {
  return (
    <section className={styles.auth_section}>
      <div className="container">
        <div className={styles.auth_grid}>
          <div className={styles.auth_grid__img_wrapper}>
            <img
              src={`/assets/images/${type}-img.jpg`}
              alt={type}
              className={styles.background_img}
            />
          </div>
          <div className={styles.auth_grid__form_wrapper}>
            {type === "login" ? <AuthForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
