import Head from 'next/head';

import PokeItem from '../components/PokeItem';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quicko - Boletim do Metrô</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PokeItem />
    </div>
  );
};

export default Home;
