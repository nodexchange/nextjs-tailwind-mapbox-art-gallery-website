import { useEffect } from 'react';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import { gaPageView } from '../lib/ga';
import '../styles/globals.css';

import '../styles/accordion.css';
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.route);
  const url = `https://latinshine.co.uk${router.route}`;

  useEffect(() => {
    const handleRouteChange = (url) => {
      gaPageView(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        titleTemplate="%s - Latin Shine"
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url,
          description:
            'Fun and friendly Bachata Sensual dance classes in High Wycombe, every Wednesday. Beginners are welcome; partners are not required. -Latin Shine',
          site_name: 'Latin Shine | Dance Company',
          images: [],
        }}
        canonical={url}
      />
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script
            id="ga-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
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
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}>
          <Component {...pageProps} />
        </AnimatePresence>
      </SessionProvider>
    </>
  );
}

export default MyApp;
