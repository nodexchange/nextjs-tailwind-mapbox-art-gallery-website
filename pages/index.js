import HeroSection from "../components/HeroSection";
// import HeroVideo from "../components/HeroVideo";
import MainSection from "../components/MainSection";
import { Instructors } from "../components/Instructors";
import { CourseInfo } from "../components/CourseInfo";
import Header from "../components/Header";
import { Main as Layout } from "../layouts";
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <Layout>
      <Header />
      {/* <HeroVideo /> */}
      <HeroSection />
      <CourseInfo />
      <ImageGallery />
      {/* <Signup /> */}
      <MainSection />
      <Instructors />
    </Layout>
  );
}
