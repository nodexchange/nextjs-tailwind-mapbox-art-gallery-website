import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { gaEvent } from '../lib/ga';
import { Secondary as Layout } from '../layouts';
import ButtonC from '../components/ButtonC';
import LocationMap from '../components/LocationMap';
import SocialIcons from '../components/SocialIcons';

const Reserve = () => {
  const router = useRouter();

  const inputEmailEl = useRef(null);
  const inputFirstNameEl = useRef(null);
  const inputLastNameEl = useRef(null);

  const [message, setMessage] = useState('');
  const [completeBeginnerCheck, setCompleteBeginnerCheck] = useState(true);
  const [validation, setValidation] = useState('');

  const testForEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const validate = () => {
    if (inputEmailEl.current.value === '') {
      setValidation('Email is required');
      return false;
    }
    if (!testForEmail(inputEmailEl.current.value)) {
      setValidation('Please check if your email is correct');
      return false;
    }
    if (inputFirstNameEl.current.value === '') {
      setValidation('First Name is required');
      return false;
    }
    return true;
  };
  const reserve = async (e) => {
    e.preventDefault();
    if (!validate()) {
      gaEvent({
        action: 'reserve_validation_error',
        params: { section: 'reserve' },
      });
      return;
    }

    gaEvent({ action: 'reserve_button_click', params: { section: 'reserve' } });
    const res = await fetch('/api/reserve', {
      body: JSON.stringify({
        email: inputEmailEl.current.value,
        firstName: inputFirstNameEl.current.value,
        lastName: inputLastNameEl.current.value,
        beginner: completeBeginnerCheck
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { error } = await res.json();

    if (error) {
      gaEvent({ action: 'reserve_error', params: { section: 'reserve' } });
      setMessage(error);
      return;
    }

    inputEmailEl.current.value = '';
    inputFirstNameEl.current.value = '';
    inputLastNameEl.current.value = '';
    router.push('/reserve-confirmation');
    //
  };

  const checkboxHandler = (e) => {
    setCompleteBeginnerCheck(e.target.checked);
  }

  return (
    <Layout
      title="Latin Shine | Dance Company - Reserve your spot"
      description="You can use the form below to reserve spot for our Salsa (LA Style) and Bachata Sensual latin dance class. Join our class every Tuesday & Wednesday, in High Wycombe">
      <main className="text-center bg-almostBlack text-white px-8 py-10 sm:py-[80px] md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
        {message ? (
          <>
            <h1
              className="text-bodyM font-black uppercase font-bigShoulder"
              style={{ lineHeight: '1.5rem' }}>
              😪 Ooopss :-( Something went wrong!
            </h1>
            <br />
            <p>Looks like there was an error reserving your spot.</p>
            <br />
            <p>Don&apos;t worry you can still join our class! 💃 🕺</p>
            <p>
              You learn more about our events and reach out to us via Facebook
              or Instagram.
            </p>
            <p>
              <SocialIcons />
            </p>
          </>
        ) : (
          <>
            <header>
              <h1
                className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
                style={{ lineHeight: '1.5rem' }}>
                Reserve your spot!
              </h1>
            </header>
            <br />
            <p className="font-light">
              Please fill in your details below to let us know that you coming
              for the upcoming class. Our team will be in touch to confirm.
            </p>
            <form className="w-full max-w-sm mx-auto">
              {validation && (
                <>
                  <p className="text-shine">{validation}</p>
                </>
              )}
              <div className="flex items-center border-b border-shine py-2">
                <input
                  ref={inputEmailEl}
                  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="youremail@gmail.com"
                  aria-label="Email Input Field"
                />
              </div>
              <div className="flex items-center border-b border-shine py-2">
                <input
                  ref={inputFirstNameEl}
                  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your First name"
                  aria-label="First Name Input Field"
                />
              </div>
              <div className="flex items-center border-b border-shine py-2">
                <input
                  ref={inputLastNameEl}
                  className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Your second name"
                  aria-label="Last Name Input Field"
                />
              </div>
              <div className="form-check inline-block pt-4">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-shine checked:border-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="flexCheckChecked" onChange={checkboxHandler} defaultChecked={completeBeginnerCheck} />
                <label className="form-check-label block w-full pl-7 text-left text-white" htmlFor="flexCheckChecked">
                  Check this box if you are <span className="underline">a complete beginner</span> to Latin Dancing.
                </label>
              </div>
              {/* <div className="form-check">
                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked />
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                  reserve
                </label>
              </div> */}
              <ButtonC title="Reserve" action={reserve} />
            </form>
            <br />
            <div className="font-light">
              <h1
                className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
                style={{ lineHeight: '1.5rem' }}>
                Our Schedule!
              </h1>
              <h3>Tuesdays (Starting March 2023!)</h3>
              <p>19:00 - 20:00 - Salsa LA (Crossbody on1) Beginners Class</p>
              <p>20:00 - 21:00 - Salsa LA (Crossbody on1) Improvers Class</p>
              <br />
              <h3>Wednesdays</h3>
              <p>19:00 - 20:00 - Bachata Beginners Class</p>
              <p>20:00 - 21:00 - Bachata Improvers Class</p>
            </div>
            <br />
            <Link href="/location" passHref>
                <a className="underline text-white">
                  Locations in High Wycombe.
                </a>
              </Link>
          </>
        )}
      </main>
    </Layout>
  );
};

export default Reserve;
