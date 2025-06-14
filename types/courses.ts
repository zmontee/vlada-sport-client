import {
  BenefitDTO,
  CourseDTO,
  CourseProgressDTO,
  EquipmentDTO,
  LessonDTO,
  LessonProgressDTO,
  ModuleDTO,
  ModuleProgressDTO,
  ReviewDTO,
  UserDTO,
} from "@/types/dto";
import { Feedback } from "@/types/feedback";

export type InfoRow = {
  order: number;
  title: string;
  subtitle: string;
  img?: string;
};

export type Program = ModuleDTO & { _count: { lessons: number } };

export type Equip = {
  id: number;
  img: string;
  title: string;
};

export type CourseDescriptor = CourseDTO & {
  modules: Program[];
  equipment: EquipmentDTO[];
  benefits: BenefitDTO[];
  reviews: Feedback[];
};

export type PurchaseCoursesRequest = {
  courseIds: number[];
  paymentMethod?: string;
  paymentId?: string;
};

export type PurchaseCoursesResponse = {
  status: string;
  message: string;
  data: {
    id: number;
    courseId: number;
    userId: number;
    paymentMethod: string | null;
    paymentId: string | null;
    purchaseDate: Date;
    amount: number;
  }[];
};

export type UserReviewInfo = {
  experience: string;
  imageUrl: string;
  name: string;
  surname: string;
};

export type UserCourseProgress = CourseProgressDTO & {
  currentModule: ModuleDTO;
};

export type UserCourseModule = ModuleDTO & {
  progress: ModuleProgressDTO;
};

export type UserCourseDescriptor = CourseDTO & {
  modules: UserCourseModule[];
  reviews: (ReviewDTO & { user: UserReviewInfo })[];
  progress: UserCourseProgress;
  equipment: EquipmentDTO[];
  benefits: BenefitDTO[];
  purchases: {
    id: number;
    purchaseDate: Date;
    amount: number;
    paymentMethod?: string;
    paymentId?: string;
  }[];
};

export type UserModuleLesson = LessonDTO & { progress: LessonProgressDTO };

export type UserModuleDescriptor = ModuleDTO & {
  progress: ModuleProgressDTO;
  course: CourseDTO;
  lessons: UserModuleLesson[];
  equipment: EquipmentDTO[];
};

export type UserLessonDescriptor = LessonDTO & {
  module: Omit<ModuleDTO, "imageUrl" | "description">;
  equipment: EquipmentDTO[];
  progress: LessonProgressDTO;
  hasPurchased: boolean;
  prevLessonId: number | null;
  nextLessonId: number | null;
};
