import { Secondary as Layout } from '../layouts';
import { About } from "../components/About";

const AboutBachataPage = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - About Bachata"
      description="Learn more about Bachata Sensual, history of the dance and the rhythm">
      <main className=" bg-almostBlack text-white py-10 md:py-10 lg:py-30 justify-between md:items-start">
        <About />
      </main>
    </Layout>
  );
};

export default AboutBachataPage;
