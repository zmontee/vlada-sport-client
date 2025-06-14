"use client";
import React, { use, useEffect, useState } from "react";
import coursesService from "@/services/courses";
import useAuthStore from "@/store/authStore";
import { UserCourseDescriptor } from "@/types/courses";
import HeroSection from "@/containers/my-course-page/hero-section";
import ModulesSection from "@/containers/my-course-page/modules-section";
import EquipSection from "@/containers/course-info-page/equip-section";
import FeedbacksSection from "@/containers/course-info-page/feedbacks-section";

const MyCoursePage: React.FC<{ params: Promise<{ id: string }> }> = ({
  params,
}) => {
  const resolvedParams = use(params);
  const isAuth = useAuthStore((state) => state.isAuth);
  const [myCourse, setMyCourse] = useState<UserCourseDescriptor | null>(null);
  const courseId = Number(resolvedParams.id);

  useEffect(() => {
    const fetchMyCourse = async () => {
      console.log("id:", courseId);
      if (isAuth && !isNaN(courseId)) {
        try {
          const courseInfo = await coursesService.getUserCourseById(courseId);

          console.log("my course info:", courseInfo);

          if (courseInfo) {
            setMyCourse(courseInfo);
          } else {
            console.error("Course not found or not purchased");
          }
        } catch (error) {
          console.error("Failed to fetch course", error);
        }
      }
    };

    fetchMyCourse();
  }, [isAuth, courseId]);

  return (
    myCourse && (
      <main>
        <HeroSection
          progress={myCourse.progress}
          courseDescription={myCourse.description}
          courseImg={myCourse.imageUrl}
        />
        <ModulesSection modules={myCourse.modules} />
        <EquipSection equip={myCourse.equipment} />
        <FeedbacksSection feedbacks={myCourse.reviews} />
      </main>
    )
  );
};

export default MyCoursePage;
