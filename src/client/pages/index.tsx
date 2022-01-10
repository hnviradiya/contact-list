import { Divider } from 'antd';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.css';
import { RootState } from '../_redux/reducers/rootReducer';
import Cookies from 'universal-cookie';

const Home: NextPage = () => {
  const cookies = new Cookies();

  const { userId } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    (async () => {
      if (userId) {
        cookies.set('userId', userId, {
          path: '/',
          expires: new Date(Date.now() + 2592000),
        });
      }
    })();
  }, []);

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
          Get started by clicking{' '}
          <a className={styles.linkdescription}>
            <Link href="/contact-list">Contact List</Link>
          </a>
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
