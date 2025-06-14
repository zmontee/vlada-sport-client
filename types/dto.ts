// types/dto.ts

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type UserDTO = {
  id: number;
  email: string;
  name: string;
  surname: string;
  phoneNumber?: string;
  sex: string;
  birthDate: string;
  experience: string;
  weight?: number;
  imageUrl?: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserDTO = {
  email: string;
  passwordHash: string;
  name: string;
  surname: string;
  phoneNumber?: string;
  sex: string;
  birthDate: string;
  experience: string;
  weight?: number;
  imageUrl?: string;
  role?: UserRole;
};

export type OAuthAccountDTO = {
  id: number;
  provider: string;
  providerId: string;
  userId: number;
};

export type RefreshTokenDTO = {
  id: number;
  token: string;
  userId: number;
  createdAt: string;
  expiresAt: string;
};

export type CourseDTO = {
  id: number;
  title: string;
  description: string;
  additionalDescription?: string;
  level: string;
  targetAudience: string[];
  duration: string;
  price: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
};

export type ModuleDTO = {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  orderIndex: number;
  courseId: number;
};

export type LessonDTO = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  imageUrl?: string;
  duration: number;
  orderIndex: number;
  moduleId: number;
};

export type EquipmentDTO = {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
};

export type CourseEquipmentDTO = {
  courseId: number;
  equipmentId: number;
  quantity: number;
  notes?: string;
};

export type BenefitDTO = {
  id: number;
  name: string;
  description?: string;
  imageUrl?: string;
};

export type CourseBenefitDTO = {
  courseId: number;
  benefitId: number;
};

export type ModuleEquipmentDTO = {
  moduleId: number;
  equipmentId: number;
  quantity: number;
  notes?: string;
};

export type LessonEquipmentDTO = {
  lessonId: number;
  equipmentId: number;
  quantity: number;
  notes?: string;
};

export type ReviewDTO = {
  id: number;
  rating: number;
  comment: string;
  beforePhotoUrl?: string;
  afterPhotoUrl?: string;
  createdAt: string;
  userId: number;
  courseId: number;
};

export type GeneralReviewDTO = {
  id: number;
  rating: number;
  comment: string;
  beforePhotoUrl?: string;
  afterPhotoUrl?: string;
  createdAt: string;
  userId: number;
};

export type PurchaseDTO = {
  id: number;
  purchaseDate: string;
  amount: number;
  paymentMethod?: string;
  paymentId?: string;
  userId: number;
  courseId: number;
};

export type CourseProgressDTO = {
  id: number;
  progressPercent: number;
  isCompleted: boolean;
  startedAt: string;
  completedAt?: string;
  userId: number;
  courseId: number;
  currentModuleId?: number;
};

export type ModuleProgressDTO = {
  id: number;
  progressPercent: number;
  isCompleted: boolean;
  isLocked: boolean;
  startedAt: string;
  completedAt?: string;
  userId: number;
  moduleId: number;
};

export type LessonProgressDTO = {
  id: number;
  isCompleted: boolean;
  isLocked: boolean;
  watchedSeconds: number;
  lastPosition: number;
  startedAt: string;
  completedAt?: string;
  userId: number;
  lessonId: number;
};
