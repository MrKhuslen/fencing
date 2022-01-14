import React, { Component } from 'react';
import { Form, Button, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    console.log('password: ', password, username);

  }

  onFinish = async (values) => {
    let result = await fetch("http://10.0.10.11:8881/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
    result = await result.json();
    if (result.success === true) {
      message.success("Амжилттай")
      this.props.history.push("/home");
    } else {
      message.error(result.data)
    }
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // onChange = ({ name, e }) => {
  //   let username;
  //   let password;
  //   if (name === 'password') {
  //     username = e.target.value
  //   } else {
  //     password = e.target.value
  //   }
  //   this.setState({ username, password });
  // }

  render() {
    return (
      <div>
        
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          style={{ margin: "auto" }}
        >
          <Form.Item
            name="phoneno"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Phone number"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>


          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>

      </div>
    )
  }
}

export default Login;

