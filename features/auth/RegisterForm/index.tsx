"use client";
import React, { useEffect, useState } from "react";
import { z as zod } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerFormFirstStepSchema,
  registerFormSecondStepSchema,
  type RegisterFormFirstStepFields,
  type RegisterFormSecondStepFields,
} from "@/types/form";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import clsx from "clsx";
import RadioBox from "@/components/RadioBox";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import styles from "./_styles.module.scss";

const RegisterForm = () => {
  const router = useRouter();
  const { registerUser } = useAuthStore();
  const [step, setStep] = useState<1 | 2>(1);
  const [firstStepData, setFirstStepData] =
    useState<RegisterFormFirstStepFields | null>(null);

  const firstStepForm = useForm<RegisterFormFirstStepFields>({
    resolver: zodResolver(
      registerFormFirstStepSchema.refine(
        (data) => data.password === data.confirmPassword,
        { message: "Паролі не збігаються", path: ["confirmPassword"] },
      ),
    ),
    mode: "onTouched",
  });

  const secondStepForm = useForm<RegisterFormSecondStepFields>({
    resolver: zodResolver(registerFormSecondStepSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      surname: "",
      age: "",
      sex: "",
      experience: "",
    },
  });

  const handleNextStep = async () => {
    const isValid = await firstStepForm.trigger();
    if (isValid) {
      const data = firstStepForm.getValues();
      setFirstStepData(data);
      setStep(2);
    }
  };

  const onFirstStepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void handleNextStep();
  };

  const onSecondStepSubmit = async (
    secondStepData: RegisterFormSecondStepFields,
  ) => {
    if (!firstStepData) return;

    const completeData = {
      ...firstStepData,
      ...secondStepData,
    };

    await registerUser({
      email: completeData.email,
      password: completeData.password,
      name: completeData.name,
      surname: completeData.surname,
      sex: completeData.sex,
      birthDate: completeData.age,
      experience: completeData.experience,
    });

    router.replace("/");
  };

  return (
    <form
      className={clsx(styles.register_form, {
        [styles.register_form_second]: step === 2,
      })}
      onSubmit={
        step === 1
          ? onFirstStepSubmit
          : secondStepForm.handleSubmit(onSecondStepSubmit)
      }
    >
      <div className={styles.register_form_body}>
        <h2 className={styles.register_form_title}>Реєстрація</h2>
        {step === 2 && (
          <p className={styles.register_form_description}>
            Введіть ваші персональні дані
          </p>
        )}
        {step === 1 ? (
          // Step 1: Email and Password
          <>
            <div className={styles.fields_wrapper}>
              <TextField
                key="email-field"
                title="Email"
                {...firstStepForm.register("email")}
                invalid={!!firstStepForm.formState.errors.email?.message}
                error={firstStepForm.formState.errors.email?.message}
              />
              <TextField
                key="password-field"
                title="Пароль"
                type="password"
                {...firstStepForm.register("password")}
                invalid={!!firstStepForm.formState.errors.password?.message}
                error={firstStepForm.formState.errors.password?.message}
              />
              <TextField
                key="confirmPassword-field"
                title="Повторіть пароль"
                type="password"
                {...firstStepForm.register("confirmPassword")}
                invalid={
                  !!firstStepForm.formState.errors.confirmPassword?.message
                }
                error={firstStepForm.formState.errors.confirmPassword?.message}
              />
            </div>
            <Button type="submit" className={styles.submit_btn}>
              Зареєструватись
            </Button>
          </>
        ) : (
          // Step 2: Personal Information
          <>
            <div className={styles.fields_wrapper}>
              <TextField
                key="name-field"
                title="Ім'я"
                {...secondStepForm.register("name")}
                error={secondStepForm.formState.errors.name?.message}
                invalid={!!secondStepForm.formState.errors.name?.message}
              />
              <TextField
                key="surname-field"
                title="Прізвище"
                {...secondStepForm.register("surname")}
                error={secondStepForm.formState.errors.surname?.message}
                invalid={!!secondStepForm.formState.errors.surname?.message}
              />
              <TextField
                key="age-field"
                title="Вік"
                type="number"
                {...secondStepForm.register("age")}
                error={secondStepForm.formState.errors.age?.message}
                invalid={!!secondStepForm.formState.errors.age?.message}
              />
              <div className={styles.field}>
                <label className={styles.field_label}>Стать</label>
                <div className={styles.radio_group}>
                  <RadioBox
                    key="sex-radio-1"
                    title="Чоловіча"
                    value="MALE"
                    {...secondStepForm.register("sex")}
                  />
                  <RadioBox
                    key="sex-radio-2"
                    title="Жіноча"
                    value="FEMALE"
                    {...secondStepForm.register("sex")}
                  />
                </div>
                {secondStepForm.formState.errors.sex?.message && (
                  <span className={styles.error_message}>
                    {secondStepForm.formState.errors.sex.message}
                  </span>
                )}
              </div>
              <div className={styles.field}>
                <label className={styles.field_label}>Досвід тренувань</label>
                <div className={styles.radio_group}>
                  <RadioBox
                    key="experience-radio-1"
                    title="до 1 року"
                    value="-1"
                    {...secondStepForm.register("experience")}
                  />
                  <RadioBox
                    key="experience-radio-2"
                    title="1-2 роки"
                    value="1-2"
                    {...secondStepForm.register("experience")}
                  />
                  <RadioBox
                    key="experience-radio-3"
                    title="2-3 роки"
                    value="2-3"
                    {...secondStepForm.register("experience")}
                  />
                  <RadioBox
                    key="experience-radio-4"
                    title="4+ років"
                    value="4+"
                    {...secondStepForm.register("experience")}
                  />
                </div>
                {secondStepForm.formState.errors.experience?.message && (
                  <span className={styles.error_message}>
                    {secondStepForm.formState.errors.experience.message}
                  </span>
                )}
              </div>
            </div>

            <Button type="submit" className={styles.submit_btn}>
              Завершити
            </Button>
          </>
        )}
      </div>
      {step === 1 && (
        <div className={styles.login_wrapper}>
          <h3>Вже є профіль?</h3>
          <Button secondary to="/auth" className={styles.login_btn}>
            Вхід
          </Button>
        </div>
      )}
    </form>
  );
};

export default RegisterForm;
