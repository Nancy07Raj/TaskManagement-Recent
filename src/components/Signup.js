import React from 'react';
import { Form, Input, Button } from 'antd';

function Signup(){
    return(<Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
          offset: 1,
        }}
        style={{margin:'50px 0'}}
        autoComplete="off"
      >
        <Form.Item
          label="FirstName"
          name="fn"
          rules={[
            {
              required: true,
              message: 'Please input your FirstName!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="LastName"
          name="ln"
          rules={[
            {
              required: true,
              message: 'Please input your LastName!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email ID"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email ID!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="pwd"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 10,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" style={{margin: '30px 50px'}} htmlType="reset">
            Reset
          </Button>
        </Form.Item>
      </Form>)
}

export default Signup;