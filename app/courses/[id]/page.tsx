import React from "react";
import { courseFakeInfo } from "@/utils/mockData";
import { CourseDescriptor } from "@/types/courses";
import HeroSection from "@/containers/course-info-page/hero-section";
import CourseAboutSection from "@/containers/course-info-page/about-section";
import ProgramSection from "@/containers/course-info-page/program-section";
import EquipSection from "@/containers/course-info-page/equip-section";
import FeedbacksSection from "@/containers/course-info-page/feedbacks-section";
import QuestionSection from "@/containers/home-page/question-section";
import CourseBadge from "@/features/courses/CourseBadge";

const CourseInfoPage = async ({ params }) => {
  const courseInfo: CourseDescriptor = await new Promise((resolve) => {
    resolve(courseFakeInfo);
  });

  return (
    <main>
      <HeroSection
        img={courseInfo.img}
        title={courseInfo.title}
        mainDescription={courseInfo.mainDescription}
        length={courseInfo.length}
        modulesCount={courseInfo.modulesCount}
        level={courseInfo.level}
        price={courseInfo.price}
      />
      <CourseAboutSection
        benefits={courseInfo.benefits}
        audience={courseInfo.audience}
      />
      <ProgramSection program={courseInfo.program} />
      <EquipSection equip={courseInfo.equipment} />
      <FeedbacksSection feedbacks={courseInfo.feedbacks} />
      <QuestionSection />
      <CourseBadge
        img={courseInfo.img}
        title={courseInfo.title}
        price={courseInfo.price}
      />
    </main>
  );
};

export default CourseInfoPage;
