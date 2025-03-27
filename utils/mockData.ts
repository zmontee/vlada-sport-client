import { AdditionalService } from "@/types/courses";

export const coursesCards = [
  {
    id: 1,
    title: "Сила і баланс",
    description:
      "Цей курс ідеально підходить для тих, хто хоче зміцнити своє тіло, поліпшити координацію та знайти внутрішній баланс. Силові вправи в поєднанні з розтяжкою й функціональними тренуваннями допоможуть вам досягти відчуття гармонії та впевненості в собі",
    price: 2500,
    level: "Середній",
    img: "course-1.jpg",
    isActive: true,
  },
  {
    id: 2,
    title: "Швидкий старт",
    description:
      "Цей курс ідеально підходить для тих, хто хоче зміцнити своє тіло",
    price: 6969,
    level: "Новачок",
    img: "course-2.jpg",
    isActive: true,
  },
  {
    id: 3,
    title: "Сила і баланс",
    description:
      "Цей курс ідеально підходить для тих, хто хоче зміцнити своє тіло, поліпшити координацію та знайти внутрішній баланс. Силові вправи в поєднанні з розтяжкою й функціональними тренуваннями допоможуть вам досягти відчуття гармонії та впевненості в собі",
    price: 2500,
    level: "Середній",
    img: "course-3.jpg",
    isActive: false,
  },
  {
    id: 4,
    title: "Сила і баланс",
    description:
      "Цей курс ідеально підходить для тих, хто хоче зміцнити своє тіло, поліпшити координацію та знайти внутрішній баланс. Силові вправи в поєднанні з розтяжкою й функціональними тренуваннями допоможуть вам досягти відчуття гармонії та впевненості в собі",
    price: 2500,
    level: "Середній",
    img: "course-4.jpg",
    isActive: false,
  },
];

export const additionalData: AdditionalService[] = [
  {
    id: 1,
    title: "Індивідуальні тренування",
    price: 700,
    img: "/assets/images/additional/additional-1.jpg",
  },
  {
    id: 2,
    title: "Групові тренування",
    price: 300,
    img: "/assets/images/additional/additional-2.jpg",
  },
  {
    id: 3,
    title: "Розробка індивідуальної програми тренувань",
    price: 2500,
    img: "/assets/images/additional/additional-3.jpg",
  },
  {
    id: 4,
    title: "Онлайн-консультації",
    price: 500,
    img: "/assets/images/additional/additional-4.jpg",
  },
  {
    id: 5,
    title: "Фітнес-марафони",
    price: 2000,
    img: "/assets/images/additional/additional-5.jpg",
  },
];
