import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import homeStyles from '../styles/home.module.css';
import styles from '../styles/registration-login.module.css';

const CommonHeader = ({ children }): JSX.Element => {
  return (
    <Layout className="layout">
      <Header className={styles['site-layout-header']}>Contact List</Header>
      <Content style={{ padding: '50px 50px' }}>
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

export default CommonHeader;
