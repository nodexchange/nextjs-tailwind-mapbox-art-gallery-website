// log the pageview with their URL
export const gaPageView = (url) => {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
    page_path: url,
  })
}

// log specific events happening.
export const gaEvent = ({ action, params }) => {
  if (!process.env.NEXT_PUBLIC_GA_ID) return;
  window.gtag('event', action, params)
}