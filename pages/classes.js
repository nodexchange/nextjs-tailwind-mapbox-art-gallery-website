import { Secondary as Layout } from '../layouts';
import ButtonA from '../components/ButtonA';

const AboutOurClasses = () => {
  return (
    <Layout
      title="Latin Shine | Dance Company - Our Salsa and Bachata Classes"
      description="Learn more about our Latin Dance LA Style (on-1 / crossbody) Salsa & Bachata Sensual Classes, weekly schedule, prices and locations">
      <main className=" bg-almostBlack text-white py-10 md:py-10 lg:py-30 justify-between md:items-start">
        <section id="salsa" className="text-left bg-almostBlack text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
          <h2 className="font-black uppercase font-bigShoulder text-headingS lg:text-headingS md:mb-4">
            Salsa Tuesdays - Castle Street Dance Studios (High Wycombe)
          </h2>
          <p>
            📣 SALSA Beginners & Improvers COURSES 📣
            <br />
            <br />
            You have been asking and we have listened! We are Starting our new
            LA Style (Crossbody on1) Salsa classes at Castle Street Dance
            Studio. Classes will be taught by two of our instructors Alyssa and
            Martin.
            <br />
            Partners are not required!
            <br />
            Beginners are welcome!
            <br />
            <br />
            Price: £10 per person
            <br />
            (£7 for student with the valid NUS/University card).
            <br />
          </p>
          <br />
          <p className="font-bold">Tuesdays</p>
          <p>19:00 - 20:00 - Salsa LA (Crossbody on1) Beginners Class</p>
          <p>20:00 - 21:00 - Salsa LA (Crossbody on1) Improvers Class</p>
          <br />
          <p>Address: Castle Dance Studio, 52a Castle Street High Wycombe HP13
            6RG.</p>
          <div className="w-[200px]"><ButtonA path="/location#salsa-location" title="Salsa Location" /></div>
        </section>
        <section id="bachata" className="text-left bg-courseImage text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
          <h2 className="font-black uppercase font-bigShoulder text-headingS lg:text-headingS md:mb-4">
            Bachata Wednesdays - Guildhall (High Wycombe)
          </h2>
          <p>
            📣 Bachata Beginners & Improvers COURSES 📣
            <br />
            <br />
            🕺💃 We are teaching Bachata Sensual classes at the High Wycombe
            Guildhall (High Street). 🕺💃
            <br />
            Classes are taught by two of our instructors Alyssa and Martin to
            represent Sensual Style dynamics of followers and leaders.
          </p>
          <p>
            You will learn the basics of Bachata sensual, dancing technique, and
            partner work.
            <br />
            Partners are not required!
            <br />
            Beginners are welcome!
            <br />
            <br />
            Price: £10 per person,
            <br />
            (£7 for student with the valid NUS/University card).
            <br />
          </p>
          <br />
          <p className="font-bold">Wednesdays</p>
          <p>19:00 - 20:00 - Bachata Beginners Class</p>
          <p>20:00 - 21:00 - Bachata Improvers Class</p>
          <p>21:00 - 22:00 - Bachata Intermediate Class (invite-only)</p>
          <br />
          <p>Address: Guildhall (High Street), High Wycombe.</p>
          <div className="w-[200px]"><ButtonA path="/location#bachata-location" title="Bachata Location" /></div>
        </section>
      </main>
    </Layout>
  );
};

export default AboutOurClasses;
