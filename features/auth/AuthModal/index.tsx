import React, { useState } from "react";
import styles from "./_styles.module.scss";
import SideModalLayout from "@/components/SideModalLayout";
import { useModal } from "@/hooks/useModal";
import useAuthStore from "@/store/authStore";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const AuthModal: React.FC = () => {
  const router = useRouter();
  const { closeModal } = useModal();

  const { login } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(email, password);
      closeModal();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleRegister = () => {
    router.push("/auth/register");
    closeModal();
  };

  return (
    <SideModalLayout closeModal={closeModal}>
      <div className={styles.auth}>
        <h5 className={styles.auth_title}>Вхід</h5>
        <span className={styles.auth_description}>
          Для придбання необхідна авторизація
        </span>
        <form onSubmit={handleSubmit} className={styles.auth_form}>
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
              onChange={(e) =>
                setPassword((e.target as HTMLInputElement).value)
              }
              required
              type="password"
              className={styles.auth_input}
            />
          </div>
          <div className={styles.submit_wrapper}>
            <Button type="submit">Увійти</Button>
            {/*<Link href="/reset" className={styles.reset_link}>*/}
            {/*  Відновити пароль*/}
            {/*</Link>*/}
          </div>
        </form>
        <div className={styles.register}>
          <span className={styles.register_description}>
            Ще не має профіля?
          </span>
          <Button
            secondary
            onClick={handleRegister}
            className={styles.register_btn}
          >
            Реєстрація
          </Button>
        </div>
      </div>
    </SideModalLayout>
  );
};

export default AuthModal;
