import { Button, Col, Form, Input, Layout, message, Row } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import React, { useEffect } from 'react';
import styles from '../styles/registration-login.module.css';
import homeStyles from '../styles/home.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { fetchPostsRequest } from '../_redux/actions/postsActions/postsActions';
import { authLoginRequest } from '../_redux/actions/authActions/authActions';

const baseUserUrl = '/api/user';

const RegistrationLogin = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onLoginFormFinish = async (data: any) => {
    dispatch(authLoginRequest(data));

    router.push('/');
  };

  const onRegistrationFormFinish = async (data: any) => {
    await axios.post(`${baseUserUrl}/create`, data);

    message.success({
      content: 'User created successfully. Please login to continue...',
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const validateMessages = {
    required: "'${name}' is required!",
    // ...
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <Layout className="layout">
      <Header className={styles['site-layout-header']}>Contact List</Header>
      <Content style={{ padding: '50px 50px' }}>
        <div className={styles['site-layout-content']}>
          <>
            <Row>
              <Col span={12}>
                <Form
                  {...layout}
                  name="nest-messages"
                  onFinish={onRegistrationFormFinish}
                  validateMessages={validateMessages}
                >
                  <Form.Item
                    name="name"
                    label="Full Name"
                    rules={[{ required: true }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid Email!',
                      },
                      {
                        required: true,
                        message: 'Please enter your Email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            new Error(
                              'The two passwords that you entered do not match!',
                            ),
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                      Create Account
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
              <Col span={12}>
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onLoginFormFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Email"
                    name="username"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid Email!',
                      },
                      {
                        required: true,
                        message: 'Please enter your Email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                      Sign In
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </>
        </div>
      </Content>
      <Footer className={homeStyles.footer}>
        Made with ❤ by Hardik Viradiya
      </Footer>
    </Layout>
  );
};

export default RegistrationLogin;
