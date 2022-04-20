import type { NextPage } from 'next';
import Head from 'next/head';
import { AuthComponent } from '../components/AuthComponent';

const Home: NextPage = () => {
  return (
    <div style={{ padding: '0px', margin: '0px', background: '#555' }}>
      <Head>
        <title>Holtz - NextAuth</title>
        <meta name="description" content="Developed by Henrique Holtz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ paddingTop: '15px' }}>
        <h1>
          Welcome to{' '}
          <a href="https://github.com/henriqueholtz/Holtz_NextAuth">
            {' '}
            Holtz - Next Auth
          </a>
        </h1>
        <AuthComponent />
      </main>

      <footer>
        <p>Developed by Henrique Holtz</p>
      </footer>
    </div>
  );
};

export default Home;
