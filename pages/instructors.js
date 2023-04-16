import { Secondary as Layout } from '../layouts';
import { Instructors } from "../components/Instructors";

const InstructorsPage = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - Instructors"
      description="Learn about our Latin Dance instructors">
      <main className=" bg-almostBlack text-white py-10 md:py-10 lg:py-30 justify-between md:items-start">
        <Instructors />
      </main>
    </Layout>
  );
};

export default InstructorsPage;
