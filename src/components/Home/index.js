/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Select } from 'antd';
import { UserOutlined, FacebookOutlined, UploadOutlined, HomeOutlined, TrophyOutlined, InstagramOutlined, TeamOutlined, ShopOutlined } from '@ant-design/icons';
import Category from '../Category/index.js';
import User from '../User/index';
import Workers from '../Workers/index'
import 'antd/dist/antd.css';
import './index.css';
import Fencing from '../Fencing/index'
import Elselt from '../Elselt/index'

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
        
          <div className="homelogo">
            FENCING.NET
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleClick} mode="horizontal" style={{ textAlign: 'center' }}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              {"Нүүр хуудас"}
            </Menu.Item>
            <Menu.Item key="2" icon={<TrophyOutlined />}>
              {"Тэмцээний мэдээлэл"}
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}>
              {"Чансаа"}
            </Menu.Item>  
            <Menu.Item key="4" icon={<UserOutlined />}>
              {"Туялзуур сэлэм"}
            </Menu.Item>  
            <Menu.Item key="5" icon={<UploadOutlined />}>
              {"Бүртгүүлэх"}
            </Menu.Item>  
            <Menu.Item icon={<FacebookOutlined /> }><a href="https://www.facebook.com/DUELfencingclub" ></a></Menu.Item>
                  <Menu.Item icon={<InstagramOutlined />}><a href="https://www.instagram.com/duelfencing.club/" ></a></Menu.Item>
          </Menu>
       
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            {this.state.key === "1" && <User />}
            {this.state.key === "2" && <Category />}
            {this.state.key === "3" && <Workers />}
            {this.state.key === "4" && <Fencing />}
            {this.state.key === "5" && <Elselt />}
          </Content>
          <Footer style={{ textAlign: 'center' }}>{"Strategy Admin Web 2021 @Copyright"}</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home;