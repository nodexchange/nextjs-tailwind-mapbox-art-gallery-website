import { Secondary as Layout } from '../layouts';
import { Events } from "../components/Events";

const EventsPage = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - Events"
      description="Learn about our latest news, course announcements, schedule changes and all sort of exciting news related to our Salsa and Bachata courses.">
      <main className="bg-almostBlack text-white py-10 md:py-10 lg:py-30 justify-between md:items-start">
        <Events />
      </main>
    </Layout>
  );
};

export default EventsPage;
