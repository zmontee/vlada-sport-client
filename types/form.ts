import { z as zod } from "zod";

export const questionFormSchema = zod.object({
  name: zod.string().min(1, { message: "Введіть ім'я" }),
  email: zod.string().email({ message: "Введіть коректний email" }),
  phone: zod.number(),
  services: zod.array(zod.string()).min(1, { message: "Оберіть послугу" }),
  message: zod.string().min(1, { message: "Введіть повідомлення" }),
});

export type QuestionFormFields = zod.infer<typeof questionFormSchema>;
