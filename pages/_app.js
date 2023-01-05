import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import { NFTProvider } from '../context/NFTContext';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

const Marketplace = ({ Component, pageProps }) => (
  <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/692702c066.js" crossorigin="anonymous" />
    </ThemeProvider>
  </NFTProvider>
);

export default Marketplace;
