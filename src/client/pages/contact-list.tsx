import { Button, Col, Form, Input, Layout, Row, Select, Table } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import homeStyles from '../styles/home.module.css';
import styles from '../styles/registration-login.module.css';
import { RootState } from '../_redux/reducers/rootReducer';
import { apiService } from './api/api.service';
const { Option } = Select;

const ContactList = (): JSX.Element => {
  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    },
  ];

  let data: any[] = [];

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onFinish = async (contactData: any) => {

    const { pending, posts, error } = useSelector(
      (state: RootState) => state.posts,
    );

    contactData.userId = posts;

    const createdContact = apiService.post('/api/contact/create', contactData);

    data.push(createdContact);
  };

  useEffect(() => {
    (async () => {
      getContacts();
    })();
  }, []);

  const getContacts = async () => {
    const { pending, posts, error } = useSelector(
      (state: RootState) => state.posts,
    );

    data = await apiService.get('api/contact/get', { userId: posts });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Layout className="layout">
      <Header className={styles['site-layout-header']}>Contact List</Header>
      <Content>
        <div className={styles['site-layout-no-pad-content']}>
          <>
            <Row gutter={16}>
              <Col span={8}>
                <Form
                  {...formItemLayout}
                  name="register"
                  onFinish={onFinish}
                  initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                  }}
                  scrollToFirstError
                >
                  <Form.Item
                    name="name"
                    label="Full Name"
                    tooltip="What do you want to call him?"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter name!',
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please enter your E-mail!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your phone number!',
                      },
                    ]}
                  >
                    <Input
                      addonBefore={prefixSelector}
                      style={{
                        width: '100%',
                      }}
                    />
                  </Form.Item>

                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      Add Contact
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={16}>
                <Table columns={columns} dataSource={data} />
              </Col>
            </Row>
          </>
        </div>
      </Content>
      <Footer className={homeStyles.footer}>
        Copyright (c) 2021-Present, Hardik Viradiya
      </Footer>
    </Layout>
  );
};

export default ContactList;
