import { Button, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import homeStyles from '../styles/home.module.css';
import styles from '../styles/registration-login.module.css';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import React, { ReactChild, ReactChildren } from 'react';

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const CommonLayout = ({ children }: AuxProps): JSX.Element => {
  const cookies = new Cookies();
  const router = useRouter();

  const clearAllCookies = () => {
    Object.keys(cookies.getAll()).forEach((cookie: string) => {
      cookies.remove(cookie);
    });
  };

  return (
    <Layout className="layout">
      <Header className={styles['site-layout-header']}>
        Contact List{' '}
        {cookies.get('userId') ? (
          <Button
            type="link"
            className={homeStyles['signout']}
            onClick={(e) => {
              clearAllCookies();
              router.push('/registration-login');
            }}
          >
            Sign out
          </Button>
        ) : (
          ''
        )}
      </Header>
      <Content className={homeStyles['main-content']}>
        <div className={styles['site-layout-content']}>
          <>{children}</>
        </div>
      </Content>
      <Footer className={homeStyles.footer}>
        Made with ❤ by Hardik Viradiya
      </Footer>
    </Layout>
  );
};

export default CommonLayout;
