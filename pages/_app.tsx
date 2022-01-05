import '../styles/globals.css'
import Layout from '../components/layout'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  const progress = new ProgressBar({
    size: 1,
    color: "#64ffda",
    className: "z-50",
    delay: 100,
  });

  Router.events.on('routeChangeStart', () => progress.start());
  Router.events.on('routeChangeComplete', () => progress.finish());

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
