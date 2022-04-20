import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Holtz - NextAuth</title>
        <meta name="description" content="Developed by Henrique Holtz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to{' '}
          <a href="https://github.com/henriqueholtz/Holtz_NextAuth">
            {' '}
            Holtz - Next Auth
          </a>
        </h1>
      </main>

      <footer>
        <p>Developed by Henrique Holtz</p>
      </footer>
    </div>
  );
};

export default Home;
