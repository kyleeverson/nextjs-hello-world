import Header from '../header';
import './css/header.css';

{/* Header will go here */}


export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
