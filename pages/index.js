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
    <Layout title="Latin Shine | Dance Company - Learn Bachata Dance today!" description="Fun and friendly Bachata Latin dance classes in High Wycombe, every Wednesday by Latin Shine Dance Company. Beginners are welcome.">
      <Header />
      {/* <HeroVideo /> */}
      <HeroSection />
      <div className='overflow-auto h-[32vh] scroll-smooth hover:scroll-auto'>
        <CourseInfo />
      </div>
      <ImageGallery />
      <About />
      {/* <Signup /> */}
      <MainSection />
      <Instructors />
    </Layout>
  );
}
