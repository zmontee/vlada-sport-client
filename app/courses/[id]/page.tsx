import React from "react";
import HeroSection from "@/containers/course-info-page/hero-section";
import CourseAboutSection from "@/containers/course-info-page/about-section";
import ProgramSection from "@/containers/course-info-page/program-section";
import EquipSection from "@/containers/course-info-page/equip-section";
import FeedbacksSection from "@/containers/course-info-page/feedbacks-section";
import QuestionSection from "@/containers/home-page/question-section";
import CourseBadge from "@/features/courses/CourseBadge";
import coursesService from "@/services/courses";

const CourseInfoPage = async ({ params }) => {
  const { id } = await params;

  const courseInfo = await coursesService.getCourseById(id);

  if (!courseInfo) {
    return <h2>Course not found</h2>;
  }

  return (
    <main>
      {courseInfo && (
        <>
          <HeroSection
            id={courseInfo.id}
            imageUrl={courseInfo.imageUrl}
            title={courseInfo.title}
            description={courseInfo.description}
            duration={courseInfo.duration}
            modulesCount={courseInfo.modules.length}
            level={courseInfo.level}
            price={courseInfo.price}
          />
          <CourseAboutSection
            benefits={courseInfo.benefits}
            targetAudience={courseInfo.targetAudience}
          />
          <ProgramSection program={courseInfo.modules} />
          <EquipSection equip={courseInfo.equipment} />
          <FeedbacksSection feedbacks={courseInfo.reviews} />
          <QuestionSection />
          <CourseBadge
            id={courseInfo.id}
            img={courseInfo.imageUrl}
            title={courseInfo.title}
            price={courseInfo.price}
          />
        </>
      )}
    </main>
  );
};

export default CourseInfoPage;
