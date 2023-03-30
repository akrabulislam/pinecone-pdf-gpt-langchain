import '@/styles/base.css';
import type { AppProps } from 'next/app';
import { Open_Sans } from 'next/font/google';

const inter = Open_Sans({
  variable: '--font-inter',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={inter.variable}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
