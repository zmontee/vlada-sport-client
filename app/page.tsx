import HeroSection from "@/containers/home-page/hero-section";
import AboutSection from "@/containers/home-page/about-section";
import CoursesSection from "@/containers/home-page/courses-section";
import AdditionalSection from "@/containers/home-page/additional-section";
import FeedbackSection from "@/containers/home-page/feedback-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <AdditionalSection />
      <FeedbackSection />
    </main>
  );
}
