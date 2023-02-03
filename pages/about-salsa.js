import { Secondary as Layout } from '../layouts';
import { AboutSalsa } from "../components/AboutSalsa";

const AboutSalsaPage = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - About Salsa"
      description="Learn more about Salsa LA Style, history of the dance and the rhythm">
      <main className=" bg-almostBlack text-white py-10 md:py-20 lg:py-30 justify-between md:items-start">
        <AboutSalsa />
      </main>
    </Layout>
  );
};

export default AboutSalsaPage;
