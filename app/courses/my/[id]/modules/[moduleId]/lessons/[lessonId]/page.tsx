"use client";
import React, { use, useEffect, useState } from "react";
import useAuthStore from "@/store/authStore";
import coursesService from "@/services/courses";
import type { UserLessonDescriptor } from "@/types/courses";
import LessonVideoSection from "@/containers/my-lesson-page/LessonVideoSection";
import QuoteBadge from "@/features/courses/QuoteBadge";
import EquipSection from "@/containers/course-info-page/equip-section";
import PrivateRoute from "@/components/PrivateRoute";

const MyLessonPage: React.FC<{
  params: Promise<{ id: string; moduleId: string; lessonId: string }>;
}> = ({ params }) => {
  const resolvedParams = use(params);
  const lessonId = Number(resolvedParams.lessonId);
  const moduleId = Number(resolvedParams.moduleId);
  const courseId = Number(resolvedParams.id);

  const isAuth = useAuthStore((state) => state.isAuth);

  const [myLesson, setMyLesson] = useState<UserLessonDescriptor | null>(null);

  useEffect(() => {
    const fetchMyLesson = async () => {
      if (isAuth && !isNaN(lessonId)) {
        try {
          const lessonInfo = await coursesService.getUserLessonById(lessonId);

          console.log("my lesson info:", lessonInfo);

          if (lessonInfo) {
            setMyLesson(lessonInfo);
          } else {
            console.error("Lesson not found or not purchased");
          }
        } catch (error) {
          console.error("Failed to fetch lesson", error);
        }
      }
    };

    fetchMyLesson();
  }, [isAuth, lessonId]);

  return (
    <PrivateRoute>
      <main>
        {!!myLesson && (
          <>
            <LessonVideoSection
              lesson={myLesson}
              courseId={courseId}
              moduleId={moduleId}
            />
            <QuoteBadge quote={myLesson.description} img={myLesson.imageUrl} />
            <EquipSection equip={myLesson.equipment} marginTop="100px" />
          </>
        )}
      </main>
    </PrivateRoute>
  );
};

export default MyLessonPage;
