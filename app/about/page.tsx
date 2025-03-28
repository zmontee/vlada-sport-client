import AboutHeroSection from "@/containers/about-page/hero-section";
import HelloSection from "@/containers/about-page/hello-section";
import EducationSection from "@/containers/about-page/education-section";
import ResultsSection from "@/containers/about-page/results-section";
import QuestionSection from "@/containers/home-page/question-section";

export default function About() {
  return (
    <main>
      <AboutHeroSection />
      <HelloSection />
      <EducationSection />
      <ResultsSection />
      <QuestionSection />
    </main>
  );
}
