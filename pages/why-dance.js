import { Secondary as Layout } from '../layouts';
import { WhyDance } from "../components/WhyDance";

const WhyDancePage = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - Why Dance?"
      description="Learn about mental and physical benefits of latin dancing">
      <main className=" bg-almostBlack text-white py-10 md:py-20 lg:py-30 justify-between md:items-start">
        <WhyDance />
      </main>
    </Layout>
  );
};

export default WhyDancePage;
