import { Button, Col, Form, Input, Layout, Row, Select, Table } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import axios from 'axios';
import React from 'react';
import homeStyles from '../styles/home.module.css';
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

  onFinish = async (data: any) => {
    const createdContact = await axios.post('/api/contact/create', {
      data,
    });

    data.push(createdContact);
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
      <Layout className="layout">
        <Header className={styles['site-layout-header']}>Contact List</Header>
        <Content>
          <div className={styles['site-layout-no-pad-content']}>
            <>
              <Row gutter={16}>
                <Col span={8}>
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
                        addonBefore={this.prefixSelector}
                        style={{
                          width: '100%',
                        }}
                      />
                    </Form.Item>

                    <Form.Item {...this.tailFormItemLayout}>
                      <Button type="primary" htmlType="submit">
                        Add Contact
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={16}>
                  <Table columns={this.columns} dataSource={this.data} />
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
  }
}

export default ContactList;
