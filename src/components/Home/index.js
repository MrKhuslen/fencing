/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Select } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, BarChartOutlined, CloudOutlined, AppstoreOutlined, TeamOutlined, ShopOutlined } from '@ant-design/icons';
import Category from '../Category/index.js';
import User from '../User/index';
import Workers from '../Workers/index'
import 'antd/dist/antd.css';
import './index.css';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      key: "1",
    };
  }


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({ key: e.key });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleClick}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              {"Хяналтын самбар"}
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              {"Бүртгэл"}
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              {"Ажилчид"}
            </Menu.Item>  
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            {this.state.key === "1" && <User />}
            {this.state.key === "2" && <Category />}
            {this.state.key === "3" && <Workers />}
          </Content>
          <Footer style={{ textAlign: 'center' }}>{"Strategy Admin Web 2021 @Copyright"}</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home;