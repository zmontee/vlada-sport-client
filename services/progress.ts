import { withErrorHandling } from "@/utils/api";
import { axiosPrivate } from "@/lib/axios";
import {
  UpdateLessonProgressPayload,
  UpdateLessonProgressResponse,
} from "@/types/progress";

const PROGRESS_REQUESTS = {
  UPDATE_LESSON_PROGRESS: "update-lesson-progress",
  COMPLETE_LESSON: "complete-lesson",
};

const progressService = {
  updateLessonProgress: (
    lessonId: number,
    payload: UpdateLessonProgressPayload,
  ) => {
    withErrorHandling(PROGRESS_REQUESTS.UPDATE_LESSON_PROGRESS, async () => {
      const response = await axiosPrivate.patch<UpdateLessonProgressResponse>(
        `/progress/lessons/${lessonId}/position`,
        payload,
      );

      return response.data;
    });
  },

  completeLesson: (lessonId: number) => {
    withErrorHandling(PROGRESS_REQUESTS.COMPLETE_LESSON, async () => {
      const response = await axiosPrivate.patch<UpdateLessonProgressResponse>(
        `/progress/lessons/${lessonId}/complete`,
      );

      return response.data;
    });
  },
};

export default progressService;
