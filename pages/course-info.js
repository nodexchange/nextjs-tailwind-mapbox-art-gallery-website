import { Secondary as Layout } from '../layouts';
import { CourseInfo } from "../components/CourseInfo";

const CourseInfoPage = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - Course Informations"
      description="Learn about our Bachata Course, schedule, location and price">
      <main className="bg-almostBlack text-white py-10 md:py-20 lg:py-30 justify-between md:items-start">
        <CourseInfo />
      </main>
    </Layout>
  );
};

export default CourseInfoPage;
