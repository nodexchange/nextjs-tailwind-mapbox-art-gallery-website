import { Secondary as Layout } from '../layouts';
import { News } from "../components/News";

const CourseInfoPage = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - Course Info"
      description="Learn about our Bachata Course, schedule, location and price">
      <main className="bg-almostBlack text-white py-10 md:py-20 lg:py-30 justify-between md:items-start">
        <News />
      </main>
    </Layout>
  );
};

export default CourseInfoPage;
