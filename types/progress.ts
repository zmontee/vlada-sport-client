import {
  CourseProgressDTO,
  LessonProgressDTO,
  ModuleProgressDTO,
} from "@/types/dto";

export type UpdateLessonProgressPayload = {
  position: number;
};

export type UpdateLessonProgressResponse = LessonProgressDTO & {
  moduleCompleted: boolean;
  courseCompleted: boolean;
  nextLessonUnlocked: number;
  moduleProgress: ModuleProgressDTO;
  courseProgress: CourseProgressDTO;
};
