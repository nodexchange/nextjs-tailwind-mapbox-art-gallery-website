import { useEffect, useState } from 'react';
import { Secondary as Layout } from '../layouts';
import { gaEvent } from '../lib/ga';
import ButtonA from '../components/ButtonA';

const title = '🎉 Success! 🎉';
const text =
  'Thank you for reserving your spot!';
const description = '✨ Enjoy your class with Latin Shine team ✨';

const ReserveConfirmation = () => {
  const [nextDate, setNextDate] = useState('');
  useEffect(() => {
    const d = new Date();
    const n = d.getTime(); // n == time in milliseconds since 1st Jan 1970
    const weekday = d.getDay() // 0...6 ; 0 == Sunday, 6 = Saturday, 4 = Thursday
    const numDaysToNextTuesday = weekday >= 2 ? 7 - (weekday-2) : 2 - weekday;
    const nextTuesday_msecs = n + numDaysToNextTuesday * 24 * 60 * 60 * 1000;
    const theDate = new Date(nextTuesday_msecs); // this is the date
    setNextDate(theDate.toLocaleDateString('en-GB'));

    gaEvent({ action: 'reserve_success', params: { section: 'reserve_confirmation' }});
  }, []);

  return (
    <Layout
      title="Latin Shine | Dance Company - Reserve Confirmation Screen"
      description="Latin Shine Reserve Confirmation Screen for dance classes">
      <main className="text-center bg-almostBlack text-white px-8 py-10 md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
        <h1
          className="text-bodyM font-black uppercase font-bigShoulder"
          style={{ lineHeight: '1.5rem' }}>
          {title}
        </h1>
        <div>
          <p>You are all set for your next Tuesday Salsa Class on {nextDate}</p>
          <p>{text}</p>
          <p>{description}</p>
        </div>
        <br />
        <div className="h-56 grid grid-cols-3 gap-4 content-between">
          <div></div>
          <div><ButtonA path="/location#salsa-location" title="Salsa Location" /></div>
          <div></div>
        </div>
        <div>
          
        </div>
      </main>
    </Layout>
  );
};

export default ReserveConfirmation;
