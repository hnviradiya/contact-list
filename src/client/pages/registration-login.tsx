import { Button, Col, Form, Input, message, Row } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authLoginRequest } from '../_redux/actions/authActions/authActions';
import { apiService } from '../api/api.service';
import CommonLayout from './common-layout';

const RegistrationLogin = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();

  const onLoginFormFinish = async (data: any) => {
    const { id } = await apiService.post('auth/login', data);
    if (id) {
      dispatch(authLoginRequest(data));
      router.push('/');
    } else {
      message.error('Authentication failed.');
    }
  };

  const onRegistrationFormFinish = async (data: any) => {
    if (await apiService.post('/api/user/create', data)) {
      message.success('User created successfully. Please login to continue...');
    } else {
      message.info('User with this email already exists.');
    }
  };

  const onFormValidationFailed = (errorInfo: any) => {
    message.error(errorInfo.errorFields[0].errors);
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
    <CommonLayout>
      <Row>
        <Col span={12}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onRegistrationFormFinish}
            onFinishFailed={onFormValidationFailed}
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
            onFinishFailed={onFormValidationFailed}
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
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </CommonLayout>
  );
};

export default RegistrationLogin;
