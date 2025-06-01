import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/header';
import SocialIcons from './components/socialIcons';
import Footer from './components/footer';


const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-primary text-secondary">
      <Head>
        <title>Gar Tunz | Musician</title>
        <meta name="description" content="Official portfolio of musician Gar Tunz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Header />

        <main className="min-h-[80vh] flex flex-col items-center justify-center text-center relative py-12">
          <div className="relative">
            <img
              src="/images/gar-tunz-profile.jpg"
              alt="Gar Tunz"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent shadow-2xl transition-transform hover:scale-105"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-8 mb-4 gradient-text">
            Gar Tunz
          </h1>

          <p className="text-xl sm:text-2xl font-light opacity-80 mb-8">
            Creating soundscapes that move the soul
          </p>

          <SocialIcons />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;