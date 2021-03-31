import GlobalSyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalSyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
