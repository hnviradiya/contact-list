import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';

class RegistrationLogin extends React.Component {
  onFinish = (values: any) => {
    console.log('Success:', values);
  };

  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  validateMessages = {
    required: "'${name}' is required!",
    // ...
  };

  layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  render() {
    return (
      <Layout>
        <Header>Contact List</Header>
        <Layout>
          <Sider>
            <Form
              {...this.layout}
              name="nest-messages"
              onFinish={this.onFinish}
              validateMessages={this.validateMessages}
            >
              <Form.Item
                name={['user', 'name']}
                label="Full Name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[{ type: 'email' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please enter your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item wrapperCol={{ ...this.layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Sider>
          <Sider>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please enter your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Sider>
        </Layout>
        <Footer>Made with ❤ by Hardik Viradiya</Footer>
      </Layout>
    );
  }
}

export default RegistrationLogin;
