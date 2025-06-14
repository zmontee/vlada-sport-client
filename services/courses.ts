import { axiosPrivate, axiosPublic } from "@/lib/axios";
import { CourseDTO } from "@/types/dto";
import {
  PurchaseCoursesRequest,
  PurchaseCoursesResponse,
  UserCourseDescriptor,
  UserLessonDescriptor,
  UserModuleDescriptor,
} from "@/types/courses";
import { withErrorHandling } from "@/utils/api";

const COURSES_REQUESTS = {
  GET_ALL_COURSES: "get-all-courses",
  GET_COURSE_BY_ID: "get-course-by-id",
  PURCHASE_COURSES: "purchase-courses",
  GET_PURCHASED_COURSES: "get-purchased-courses",
  GET_USER_COURSE_BY_ID: "get-user-course-by-id",
  GET_USER_LESSON_BY_ID: "get-user-lesson-by-id",
};

const coursesService = {
  getCourses: async () => {
    return withErrorHandling(COURSES_REQUESTS.GET_ALL_COURSES, async () => {
      const coursesResponse = await axiosPublic.get<CourseDTO[]>("/courses");
      return coursesResponse.data;
    });
  },

  getCourseById: async (courseId: number) => {
    return withErrorHandling(COURSES_REQUESTS.GET_COURSE_BY_ID, async () => {
      const courseResponse = await axiosPublic.get<CourseDTO>(
        `/courses/${courseId}`,
      );
      return courseResponse.data;
    });
  },

  purchaseCourses: async (payload: PurchaseCoursesRequest) => {
    return withErrorHandling(COURSES_REQUESTS.PURCHASE_COURSES, async () => {
      const purchaseResponse = await axiosPrivate.post<PurchaseCoursesResponse>(
        "/purchase",
        payload,
      );
      return purchaseResponse.data;
    });
  },

  getPurchasedCourses: async () => {
    return withErrorHandling(
      COURSES_REQUESTS.GET_PURCHASED_COURSES,
      async () => {
        const purchasedCoursesResponse = await axiosPrivate.get<CourseDTO[]>(
          "/courses/user/purchased",
        );

        return purchasedCoursesResponse.data || [];
      },
    );
  },

  getUserCourseById: async (courseId: number) => {
    return withErrorHandling(
      COURSES_REQUESTS.GET_USER_COURSE_BY_ID,
      async () => {
        const courseResponse = await axiosPrivate.get<UserCourseDescriptor>(
          `/courses/user/${courseId}`,
        );

        return courseResponse.data;
      },
    );
  },

  getUserModuleById: async (moduleId: number) => {
    return withErrorHandling(
      COURSES_REQUESTS.GET_USER_COURSE_BY_ID,
      async () => {
        const moduleResponse = await axiosPrivate.get<UserModuleDescriptor>(
          `/courses/user/module/${moduleId}`,
        );

        return moduleResponse.data;
      },
    );
  },

  getUserLessonById: async (lessonId: number) => {
    return withErrorHandling(
      COURSES_REQUESTS.GET_USER_LESSON_BY_ID,
      async () => {
        const lessonResponse = await axiosPrivate.get<UserLessonDescriptor>(
          `/courses/user/lesson/${lessonId}`,
        );

        return lessonResponse.data;
      },
    );
  },
};

export default coursesService;
