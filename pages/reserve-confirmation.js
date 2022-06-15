import { useEffect } from 'react';
import { Secondary as Layout } from '../layouts';
import { gaEvent } from '../lib/ga';
import ButtonA from '../components/ButtonA';

const title = '🎉 Success! 🎉';
const text =
  'Thank you for reserving your spot! See you on Wednesday, in High Wycombe.';
const description = '✨ Enjoy your class with Latin Shine team ✨';

const ReserveConfirmation = () => {
  useEffect(() => {
    gaEvent({ action: 'reserve_success', params: { section: 'reserve_confirmation' }});
  }, []);

  return (
    <Layout
      title="Latin Shine | Dance Company - Reserve Confirmation Screen"
      description="Latin Shine Reserve Confirmation Screen for dance classes">
      <main className="text-center bg-almostBlack text-white px-8 py-10 md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
        <h1
          className="text-bodyM font-black uppercase font-bigShoulder"
          style={{ lineHeight: '1.5rem' }}>
          {title}
        </h1>
        <div>
          <p>{text}</p>
          <p>{description}</p>
        </div>
        <br />
        <div className="h-56 grid grid-cols-3 gap-4 content-between">
          <div></div>
          <div><ButtonA path="/location" title="Our Location" /></div>
          <div></div>
        </div>
        <div>
          
        </div>
      </main>
    </Layout>
  );
};

export default ReserveConfirmation;
