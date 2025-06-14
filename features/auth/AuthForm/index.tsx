"use client";
import React, { useState } from "react";
import styles from "./_styles.module.scss";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import useAuthStore from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(email, password);

      router.replace("/");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <form className={styles.auth_form} onSubmit={handleSubmit}>
      <div className={styles.auth_form_body}>
        <h2>Вхід</h2>
        <div className={styles.fields_wrapper}>
          <TextField
            title="E-mail"
            placeholder="Введіть E-mail"
            value={email}
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            required
            className={styles.auth_input}
          />
          <TextField
            title="Пароль"
            placeholder="Введіть пароль"
            value={password}
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
            required
            type="password"
            className={styles.auth_input}
          />
        </div>
        <div className={styles.submit_wrapper}>
          <Button type="submit">Увійти</Button>
          <Link href="/reset" className={styles.reset_link}>
            Відновити пароль
          </Link>
        </div>
      </div>
      <div className={styles.registration_wrapper}>
        <h3>Ще немає профіля?</h3>
        <Button secondary to="/auth/register" className={styles.register_btn}>
          Реєстрація
        </Button>
      </div>
    </form>
  );
};

export default AuthForm;
