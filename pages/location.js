
import LocationMap from "../components/LocationMap";
import { Secondary as Layout } from "../layouts";
import text from "../config/text.json";
import { DanceLocation } from '../components/DanceLocation';

const Location = () => {
  const { locationCopy, locationSalsaCopy } = text;
  return (
    <Layout title="Latin Shine | Dance Company - Our Dance Classes Location" description="Learn more about location for our High Wycombe, Bachata Sensual Latin Dance classes">
      <LocationMap />
      <DanceLocation copy={locationCopy} />
      <DanceLocation copy={locationSalsaCopy} />
    </Layout>
  );
};

export default Location;
