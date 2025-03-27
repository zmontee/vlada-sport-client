"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type QuestionFormFields, questionFormSchema } from "@/types/form";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import styles from "./_styles.module.scss";

const QuestionForm: React.FC = () => {
  const { register, handleSubmit } = useForm<QuestionFormFields>({
    resolver: zodResolver(questionFormSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={styles.q_form} onSubmit={onSubmit}>
      <TextField
        title="Ваше ім'я"
        {...register("name")}
        className={styles.q_input}
      />
      <TextField
        title="Ваш email"
        {...register("name")}
        className={styles.q_input}
      />
      <TextField
        title="Ваш номер"
        type="mobile"
        {...register("name")}
        className={styles.q_input}
      />
      <TextField
        title="Ваше повідомлення"
        type="textarea"
        {...register("name")}
        className={styles.q_textarea}
      />
      <Button type="submit" className={styles.q_submit}>
        Надіслати
      </Button>
    </form>
  );
};

export default QuestionForm;
