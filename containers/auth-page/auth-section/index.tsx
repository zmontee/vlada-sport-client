import React from "react";
import AuthForm from "@/features/auth/AuthForm";
import styles from "./_styles.module.scss";

const AuthSection: React.FC = () => {
  return (
    <section className={styles.auth_section}>
      <div className="container">
        <div className={styles.auth_grid}>
          <div className={styles.auth_grid__img_wrapper} />
          <div className={styles.auth_grid__form_wrapper}>
            <AuthForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection;
