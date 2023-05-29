import { useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { gaEvent } from '../../lib/ga';
import { Secondary as Layout } from '../../layouts';
import ReserveSchedule from '../../components/ReserveSchedule';
import ReserveError from '../../components/ReserveError';
import ReserveForm from '../../components/ReserveForm';
import ReserveActions from '../../components/ReserveActions';
import ReserveHeader from '../../components/ReserveHeader';
import ReserveClass from '../../components/ReserveClass';
import ReserveLevel from '../../components/ReserveLevel';

const Reserve = () => {
  const router = useRouter();

  const inputEmailEl = useRef(null);
  const inputFirstNameEl = useRef(null);
  const inputLastNameEl = useRef(null);

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [bachataRadioCheck, setBachataRadioCheck] = useState(false);
  const [salsaRadioCheck, setSalsaRadioCheck] = useState(false);
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
    if (bachataRadioCheck === false && salsaRadioCheck === false) {
      setValidation('Please select a class type');
      return false;
    }

    return true;
  };
  const reserveRequest = async (e) => {
    e.preventDefault();
    if (!validate()) {
      gaEvent({
        action: 'reserve_validation_error',
        params: { section: 'reserve' },
      });
      return;
    }
    setLoading(true);
    gaEvent({ action: 'reserve_button_click', params: { section: 'reserve' } });
    const res = await fetch('/api/reserveRequest', {
      body: JSON.stringify({
        email: inputEmailEl.current.value,
        firstName: inputFirstNameEl.current.value,
        lastName: inputLastNameEl.current.value,
        beginner: completeBeginnerCheck,
        classType: bachataRadioCheck ? 'Bachata' : 'Salsa',
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
    if (bachataRadioCheck === true) {
      router.push('/reserve-confirmation-bachata');
      return;
    }
    router.push('/reserve-confirmation-salsa');
  };

  const checkboxHandler = (e) => {
    setCompleteBeginnerCheck(e.target.checked);
  };

  const radioHandler = (e) => {
    if (e.target.id === 'radioBachata') {
      setBachataRadioCheck(true);
      setSalsaRadioCheck(false);
    }
    setBachataRadioCheck(false);
    setSalsaRadioCheck(true);
  };

  return (
    <Layout
      title="Latin Shine | Dance Company - Reserve your spot"
      description="You can use the form below to reserve spot for our Salsa (LA Style) and Bachata Sensual latin dance class. Join our class every Tuesday & Wednesday, in High Wycombe">
      <main className="text-center bg-almostBlack text-white px-8 py-10 sm:py-[80px] md:py-10 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
        {message ? (
          <ReserveError />
        ) : (
          <>
            <ReserveHeader />
            <ReserveForm validation={validation} inputEmailEl={inputEmailEl} inputFirstNameEl={inputFirstNameEl} inputLastNameEl={inputLastNameEl} />
            <ReserveClass />
            <ReserveLevel checkboxHandler={checkboxHandler} completeBeginnerCheck={completeBeginnerCheck} />
            <ReserveActions loading={loading} reserve={reserveRequest} />
            <br />
            <ReserveSchedule />
          </>
        )}
      </main>
    </Layout>
  );
};

export default Reserve;
