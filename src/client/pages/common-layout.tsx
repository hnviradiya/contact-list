import { Button, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { useRouter } from 'next/router';
import React, { ReactChild, ReactChildren } from 'react';
import Cookies from 'universal-cookie';
import homeStyles from '../styles/home.module.css';

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
    <Layout className={homeStyles.layout}>
      <Header className={homeStyles.header}>
        Contact List{' '}
        {cookies.get('userId') ? (
          <Button
            type="link"
            className={homeStyles['signout']}
            onClick={() => {
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
        <div className={homeStyles['site-layout-content']}>
          <>{children}</>
        </div>
      </Content>
      <Footer className={homeStyles.footer}>
        <a>Made with ❤ by Hardik Viradiya</a>
      </Footer>
    </Layout>
  );
};

export default CommonLayout;
