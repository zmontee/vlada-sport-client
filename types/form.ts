import { z as zod } from "zod";

export const questionFormSchema = zod.object({
  name: zod.string().min(1, { message: "Введіть ім'я" }),
  email: zod.string().email({ message: "Введіть коректний email" }),
  phone: zod.number(),
  services: zod.array(zod.string()).min(1, { message: "Оберіть послугу" }),
  message: zod.string().min(1, { message: "Введіть повідомлення" }),
});

export type QuestionFormFields = zod.infer<typeof questionFormSchema>;

export const registerFormFirstStepSchema = zod.object({
  email: zod.string().email({ message: "Введіть коректний email" }),
  password: zod
    .string()
    .min(8, { message: "Пароль має містити не менше 8 символів" })
    .max(32, { message: "Пароль має містити не більше 32 символів" }),
  confirmPassword: zod.string().min(1, { message: "Паролі не збігаються" }),
});

export const registerFormSecondStepSchema = zod.object({
  name: zod.string().min(1, { message: "Введіть ім'я" }),
  surname: zod.string().min(1, { message: "Введіть прізвище" }),
  age: zod.string().min(1, { message: "Введіть вік" }),
  sex: zod.string().min(1, { message: "Виберіть стать" }),
  experience: zod.string().min(1, { message: "Вкажіть свій досвід тренувань" }),
});

export type RegisterFormFirstStepFields = zod.infer<
  typeof registerFormFirstStepSchema
>;

export type RegisterFormSecondStepFields = zod.infer<
  typeof registerFormSecondStepSchema
>;
