import { Secondary as Layout } from '../layouts';
import { News } from "../components/News";

const LatestNewsPage = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - Latest News"
      description="Learn about our latest news, course annoucemeents, schedule changes and all sort of exciting news related to our Salsa and Bachata courses.">
      <main className="bg-almostBlack text-white py-10 md:py-20 lg:py-30 justify-between md:items-start">
        <News />
      </main>
    </Layout>
  );
};

export default LatestNewsPage;
