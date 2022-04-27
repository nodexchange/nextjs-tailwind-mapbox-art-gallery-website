import { useEffect } from 'react'
import Script from 'next/script';
import { useRouter } from 'next/router'

import { SessionProvider } from 'next-auth/react';
import { gaPageView } from '../lib/ga';
import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gaPageView(url);
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  return (
    <>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            strategy='afterInteractive'
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script id='ga-analytics' strategy='afterInteractive' dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }} 
          />
        </>
      )}
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
