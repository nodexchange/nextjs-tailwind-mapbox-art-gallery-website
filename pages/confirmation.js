
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { getSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Secondary as Layout } from "../layouts";
import UpcomingEvent from '../components/UpcomingEvent';

const eventText = "Tester Bachata Class (2h) 04/05, Guildhall.";

const Confirmation = ({ user, session }) => {
  // useEffect(() => {
  //   loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  // }, []);
  // const router = useRouter();

  useEffect(() => {
    // if (!session || !session.user) {
    //   router.push('/api/auth/signin');
    // }
  }, []);

  if (typeof window === 'undefined') return null;
  // console.log('session', session);

  const isSessionAvailable = (session && Object.keys(session).length > 0);
    return (
      <Layout title="Latin Shine - Bachata Class - Payment Confirmation Screen" description="Latin Shine Payment Confirmation Screen for all online dance classes">
        <main className="text-left bg-almostBlack text-white px-8 py-10 md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
          <p>🎉 Success! 🎉 We have received your payment! Thank you for your support from ✨ Latin Shine team ✨</p>
          <br />
          {isSessionAvailable && (
            <>
              <p>Enjoy your class {session.user.name}!</p>
            </>)}
        </main>
      </Layout>
    )

  return <p>Access Denied... redirecting</p>;
}


export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });
  if (!session) {
    // res.statusCode = 403;
    return { props: { session: {} } };
  }
  let user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      paid: true,
      name: true,
      transaction: true,
      surname: true,
    },
  });

  return {
    props: {
      user,
      session,
    },
  };
}


export default Confirmation;