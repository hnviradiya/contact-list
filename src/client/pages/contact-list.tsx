import { Table } from 'antd';
import React from 'react';

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

  render() {
    return <Table columns={this.columns} dataSource={this.data} />;
  }
}

export default ContactList;
