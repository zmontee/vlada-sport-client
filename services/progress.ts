import { withErrorHandling } from "@/utils/api";
import { axiosPrivate } from "@/lib/axios";
import {
  UpdateLessonProgressPayload,
  UpdateLessonProgressResponse,
} from "@/types/progress";

const PROGRESS_REQUESTS = {
  UPDATE_LESSON_PROGRESS: "update-lesson-progress",
  COMPLETE_LESSON: "complete-lesson",
  COMPLETE_MODULE: "complete-module",
};

const progressService = {
  updateLessonProgress: async (
    lessonId: number,
    payload: UpdateLessonProgressPayload,
  ) => {
    await withErrorHandling(
      PROGRESS_REQUESTS.UPDATE_LESSON_PROGRESS,
      async () => {
        const response = await axiosPrivate.patch<UpdateLessonProgressResponse>(
          `/progress/lessons/${lessonId}/position`,
          payload,
        );

        return response.data;
      },
    );
  },

  completeLesson: async (lessonId: number) => {
    await withErrorHandling(PROGRESS_REQUESTS.COMPLETE_LESSON, async () => {
      const response = await axiosPrivate.patch<UpdateLessonProgressResponse>(
        `/progress/lessons/${lessonId}/complete`,
      );

      return response.data;
    });
  },

  completeModule: async (moduleId: number) => {
    await withErrorHandling(PROGRESS_REQUESTS.COMPLETE_MODULE, async () => {
      const response = await axiosPrivate.patch(
        `/progress/modules/${moduleId}/complete`,
      );

      return response.data;
    });
  },
};

export default progressService;
