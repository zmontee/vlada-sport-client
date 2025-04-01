import { Feedback } from "@/types/feedback";

export type InfoRow = {
  id: number;
  title: string;
  subtitle: string;
  img: string;
};

export type Program = {
  id: number;
  title: string;
  lessonsCount: number;
  img: string;
};

export type Benefit = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export type Equip = {
  id: number;
  img: string;
  title: string;
};

export type CourseDescriptor = {
  id: number;
  img: string;
  title: string;
  mainDescription: string;
  additionalDescription: string;
  price: number;
  length: string;
  modulesCount: number;
  level: string;
  isActive: boolean;
  benefits: Benefit[];
  audience: string[];
  equipment: Equip[];
  feedbacks: Feedback[];
  program: Program[];
};
