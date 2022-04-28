
import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Secondary as Layout } from "../layouts";


const Payment = () => {
  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);
  return (
    <Layout>
      <main className="text-left bg-almostBlack text-white px-8 py-10 md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
        <p>Payment Placeholder page</p>
      </main>
    </Layout>
  )
}

export default Payment;