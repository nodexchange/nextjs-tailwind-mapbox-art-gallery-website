import { Secondary as Layout } from "../layouts";
import { Faq } from "../components/Faq";

const FaqPage = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - Frequently Asked Questions"
      description="Find here anwsers to our frequently asked questions such as 'what to bring?'"
    >
      <main className=" bg-almostBlack text-white py-10 md:py-10 lg:py-30 justify-between md:items-start">
        <Faq />
      </main>
    </Layout>
  );
};

export default FaqPage;
