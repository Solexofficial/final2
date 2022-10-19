import { Button, Col, Form, Input, message, Row } from 'antd';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateClient } from 'redux/actions/Clients';
import { getClientById } from 'redux/selectors/Clients';

const ClientEditProfile = ({ id }) => {
  const currentClient = useSelector(getClientById(id));
  const history = useHistory();
  const dispatch = useDispatch();

  const initialData = {
    name: '' || currentClient?.name,
    email: '' || currentClient?.email,
    username: '' || currentClient?.username,
    phone: '' || currentClient?.phone,
    companyName: '' || currentClient?.company?.name,
    website: '' || currentClient?.website,
    street: '' || currentClient?.address?.street,
    suite: '' || currentClient?.address?.suite,
    city: '' || currentClient?.address?.city,
    postcode: '' || currentClient?.address?.zipcode,
  };

  const onFinish = values => {
    const key = 'updatable';
    const payload = {
      ...currentClient,
      name: values.name,
      email: values.email,
      username: values.username,
      phone: values.phone,
      website: values.website,
      company: {
        ...currentClient.company,
        name: values.companyName,
      },
      address: {
        ...currentClient.address,
        street: values.street,
        city: values.city,
        zipcode: values.postcode,
      },
    };
    message.loading({ content: 'Updating...', key });
    setTimeout(() => {
      console.log('Sending data: ', payload);
      dispatch(updateClient(payload));
      message.success({ content: 'Done! Check data in console', key, duration: 2 });

      setTimeout(() => {
        history.goBack();
      }, 1000);
    }, 1000);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if (!currentClient) {
    setTimeout(() => {
      history.goBack();
    }, 2000);
    return message.error({ content: `Client with id ${id} was not found`, duration: 2 });
  }
  return (
    <div className='mt-4 p-3'>
      <Form
        name='basicInformation'
        layout='vertical'
        initialValues={initialData}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Row gutter={ROW_GUTTER}>
              <Col xs={24} sm={24} md={24}>
                <Form.Item
                  label='Name'
                  name='name'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label='Username'
                  name='username'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label='Email'
                  name='email'
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'Please enter a valid email!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={12}>
                <Form.Item label='Company name' name='companyName'>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label='Phone Number' name='phone'>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24}>
                <Form.Item label='Website' name='website'>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label='Street' name='street'>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label='Suite' name='suite'>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label='City' name='city'>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label='Post code' name='postcode'>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Button type='primary' htmlType='submit'>
              Save Change
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ClientEditProfile;
