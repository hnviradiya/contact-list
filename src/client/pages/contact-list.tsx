import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Popconfirm,
  Row,
  Select,
  Table,
} from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { RootState } from '../_redux/reducers/rootReducer';
import { apiService } from '../api/api.service';
import CommonHeader from './header';
const { Option } = Select;

const ContactList = (): JSX.Element => {
  const cookies = new Cookies();
  const defaultData: any[] = [];
  const [state, setState]: [any[], (state: any[]) => void] =
    useState(defaultData);

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
    {
      title: 'Delete',
      dataIndex: '_id',
      render: (text: any, record: { _id: any }) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => deleteContact(record._id)}
        >
          <a>Delete</a>
        </Popconfirm>
      ),
    },
  ];

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

  const { userId } = useSelector((state: RootState) => state.auth);

  const getUserId = (): string => {
    return userId || cookies.get('userId');
  };

  useEffect(() => {
    (async () => {
      if (userId) {
        cookies.set('userId', userId, {
          path: '/',
          expires: new Date(Date.now() + 2592000),
        });
      }
      getContacts();
    })();
  }, []);

  const onFormValidationFailed = (errorInfo: ValidateErrorEntity<any>) => {
    message.error(errorInfo.errorFields[0].errors);
  };

  const getContacts = async () => {
    setState(
      await apiService.get('api/contact/get', {
        userId: getUserId(),
      }),
    );
  };

  const createContact = async (contactData: any) => {
    contactData.userId = getUserId();
    contactData.phone = `+${contactData.prefix}${contactData.phone}`;
    await apiService.post('/api/contact/create', contactData);
    message.success('Contact added successfully.');
    await getContacts();
  };

  const deleteContact = async (contactId: any) => {
    await apiService.post('/api/contact/delete', contactId);
    message.success('Contact deleted successfully.');
    await getContacts();
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  return (
    <CommonHeader>
      <Row gutter={16}>
        <Col span={8}>
          <Form
            {...formItemLayout}
            name="register"
            onFinish={createContact}
            onFinishFailed={onFormValidationFailed}
            initialValues={{
              prefix: '91',
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
              <InputNumber
                addonBefore={prefixSelector}
                min={1000000000}
                max={9999999999}
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
          <Table columns={columns} dataSource={state} />
        </Col>
      </Row>
    </CommonHeader>
  );
};

export default ContactList;
