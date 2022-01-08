import { Button, Form, Input, InputNumber, Layout, Select, Table } from 'antd';
import { Footer, Header } from 'antd/lib/layout/layout';
import Sider from 'antd/lib/layout/Sider';
import React from 'react';
import styles from '../styles/registration-login.module.css';
const { Option } = Select;

class ContactList extends React.Component {
  columns = [
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

  data = [];

  formItemLayout = {
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

  tailFormItemLayout = {
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

  onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  prefixSelector = (
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

  suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  render() {
    return (
      <Layout>
        <Header>Contact List</Header>
        <Layout>
          <Sider>
            {' '}
            <Form
              {...this.formItemLayout}
              name="register"
              onFinish={this.onFinish}
              initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
              }}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                label="Full Name"
                tooltip="What do you want call him?"
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
                  addonBefore={this.prefixSelector}
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>

              <Form.Item
                name="donation"
                label="Donation"
                rules={[
                  {
                    required: true,
                    message: 'Please input donation amount!',
                  },
                ]}
              >
                <InputNumber
                  addonAfter={this.suffixSelector}
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>

              <Form.Item {...this.tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Sider>
          <Sider>
            <Table columns={this.columns} dataSource={this.data} />
          </Sider>
        </Layout>
        <Footer>Copyright (c) 2021-present, Hardik Viradiya</Footer>
      </Layout>
    );
  }
}

export default ContactList;
