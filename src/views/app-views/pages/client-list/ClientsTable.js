import React from 'react';
import { DeleteOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Table, Tooltip } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';

const ClientsTable = ({ clients, onDelete, onEdit }) => {
  const tableColumns = [
    {
      title: 'Client',
      dataIndex: 'name',
      render: (_, record) => (
        <div className='d-flex'>
          <AvatarStatus name={record.username} subTitle={record.name} icon={<UserOutlined />} />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.username.toLowerCase();
          b = b.username.toLowerCase();
          return a < b ? -1 : a > b ? 1 : 0;
        },
      },
    },
    {
      title: 'Email',
      dataIndex: 'email',
      responsive: ['xl', 'xxl', 'lg', 'md', 'sm'],
      sorter: {
        compare: (a, b) => {
          a = a.email.toLowerCase();
          b = b.email.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      responsive: ['xl', 'xxl', 'lg', 'md'],
    },
    {
      title: 'Website',
      dataIndex: 'website',
      responsive: ['xl', 'xxl'],
    },
    {
      title: 'City',
      dataIndex: 'address',
      responsive: ['xl', 'xxl'],
      render: address => <span>{address.city} </span>,
    },
    {
      title: 'Street',
      dataIndex: 'address',
      responsive: ['xl', 'xxl'],
      render: address => <span>{address.street} </span>,
    },
    {
      title: 'Company name',
      dataIndex: 'company',
      responsive: ['xxl'],
      render: company => <span>{company.name} </span>,
    },

    {
      title: '',
      dataIndex: 'actions',
      render: (_, elm) => (
        <div className='text-right'>
          <Tooltip title='Edit'>
            <Button
              type='primary'
              className='mr-2'
              icon={<EditOutlined />}
              onClick={() => onEdit(elm.id)}
              size='small'
            />
          </Tooltip>
          <Tooltip title='Delete'>
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => {
                onDelete(elm.id);
              }}
              size='small'
            />
          </Tooltip>
        </div>
      ),
    },
  ];
  return <Table columns={tableColumns} dataSource={clients} rowKey='id' />;
};

export default ClientsTable;
