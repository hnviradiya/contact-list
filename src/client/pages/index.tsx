import { Divider } from 'antd';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact List App</title>
        <meta name="description" content="Created by Hardik Viradiya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Contact List App!</a>
        </h1>

        <p className={styles.description}>
          Get started by clicking <Link href="/contact-list">Contact List</Link>
        </p>

        <div className={styles.grid}>
          <Divider>Technologies</Divider>

          <p>
            Technologies used in this project are Nest.Js, Next.Js, React,
            Redux, MongoDB, Mongoose, Typegoose, Typescript
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a target="_blank" rel="noopener noreferrer">
          Developed by Hardik Viradiya
        </a>
      </footer>
    </div>
  );
};

export default Home;
