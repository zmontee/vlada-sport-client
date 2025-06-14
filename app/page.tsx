import HeroSection from "@/containers/home-page/hero-section";
import AboutSection from "@/containers/home-page/about-section";
import CoursesSection from "@/containers/home-page/courses-section";
import AdditionalSection from "@/containers/home-page/additional-section";
import FeedbackSection from "@/containers/home-page/feedback-section";
import QuestionSection from "@/containers/home-page/question-section";
import coursesService from "@/services/courses";

export default async function Home() {
  const coursesList = await coursesService.getCourses();

  return (
    <main>
      <HeroSection />
      <AboutSection />
      {coursesList && <CoursesSection courses={coursesList} />}
      <AdditionalSection />
      <FeedbackSection />
      <QuestionSection />
      <div />
    </main>
  );
}
