import { About } from "../components/About";
import HeroSection from "../components/HeroSection";
// import HeroVideo from "../components/HeroVideo";
import MainSection from "../components/MainSection";
import { Instructors } from "../components/Instructors";
import { CourseInfo } from "../components/CourseInfo";
import Header from "../components/Header";
import { Main as Layout } from "../layouts";
import ImageGallery from "../components/ImageGallery";

export default function Home() {
  return (
    <Layout title="Latin Shine | Dance Company - Home Page" description="Fun and friendly Bachata Sensual dance classes in High Wycombe, every Wednesday. Beginners are welcome; partners are not required. Learn about history of Bachata Sensual, our about Dance Instructors, their dance history, teaching background, and our weekly classes schedule.">
      <Header />
      {/* <HeroVideo /> */}
      <HeroSection />
      <CourseInfo />
      <ImageGallery />
      <About />
      {/* <Signup /> */}
      <MainSection />
      <Instructors />
    </Layout>
  );
}
