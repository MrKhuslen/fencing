/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Select } from 'antd';
import { UserOutlined, FacebookOutlined, UploadOutlined, HomeOutlined, TrophyOutlined, InstagramOutlined, TeamOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Temtseen from '../Temtseen/index.js';
import User from '../User/index';
import Chansaa from '../Chansaa/index';
import 'antd/dist/antd.css';
import './index.css';
import Fencing from '../Fencing/index';
import Elselt from '../Elselt/index';
import Boloh from '../Temtseen/boloh/index';
import Bolson from '../Temtseen/bolson/index';
import Eregtei from '../Chansaa/eregtei/index';
import Emegtei from '../Chansaa/emegtei/index';
import Hungun from '../Fencing/hungun_selem/index';
import Hvnd from "../Fencing/hvnd_selem";
import Ild from "../Fencing/ild_selem";

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      key: "1",
      isdrawer: false,
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
  handleDrawer = () => {
    this.setState({ isdrawer: !this.state.isdrawer, ishome: true });
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout>

        <div className="homelogo">
          DUEL FENCING CLUB
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={this.handleClick} mode="horizontal" style={{ textAlign: 'center' }}>
          <Menu.Item key="0" icon={<MenuUnfoldOutlined />} onClick={this.handleDrawer} />
          <Menu.Item key="1" icon={<HomeOutlined />}>
            {"Нүүр хуудас"}
          </Menu.Item>
          <SubMenu key="2" icon={<TrophyOutlined />} title={
            <span>Тэмцээний мэдээлэл </span>}>
            <Menu.ItemGroup title=''>
              <Menu.Item key='6'>Болж өнгөрсөн</Menu.Item>
              <Menu.Item key='7'>Удахгүй болох</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <SubMenu key="3" icon={<TeamOutlined />} title={
            <span> Чансаа </span>}>
            <Menu.ItemGroup title=''>
              <Menu.Item key='8'>Эрэгтэй</Menu.Item>
              <Menu.Item key='9'>Эмэгтэй</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>


          <SubMenu key="4" icon={<UserOutlined />} title={<span>Туялзуур сэлэм </span>}>
            <Menu.Item key='10'>Хөнгөн сэлэм</Menu.Item>
            <Menu.Item key='11'>Хүнд сэлэм</Menu.Item>
            <Menu.Item key='12'>Илдэн сэлэм</Menu.Item>
          </SubMenu>
          <Menu.Item key="5" icon={<UploadOutlined />}>
            {"Бүртгүүлэх"}
          </Menu.Item>
          <Menu.Item icon={<FacebookOutlined />}><a href="https://www.facebook.com/DUELfencingclub" ></a></Menu.Item>
          <Menu.Item icon={<InstagramOutlined />}><a href="https://www.instagram.com/duelfencing.club/" ></a></Menu.Item>
        </Menu>

        <div className="site-layout">
          <Content className="homeBackground" style={{ margin: '24px 0 0 0', overflow: 'initial' }}>
            {this.state.key === "1" && <User nuguudrawer={this.state.isdrawer} ishome={this.state.ishome} handleClose={this.handleDrawer} />}
            {this.state.key === "2" && <Temtseen />}
            {this.state.key === "3" && <Chansaa />}
            {this.state.key === "4" && <Fencing />}
            {this.state.key === "5" && <Elselt />}
            {this.state.key === "6" && <Bolson />}
            {this.state.key === "7" && <Boloh />}
            {this.state.key === "8" && <Eregtei />}
            {this.state.key === "9" && <Emegtei />}
            {this.state.key === "10" && <Hungun />}
            {this.state.key === "11" && <Hvnd />}
            {this.state.key === "12" && <Ild />}
          </Content>
          <Footer style={{ textAlign: 'center' }}>{" Ant Design Layout example ©2022 Created by  DataCare"}</Footer>
        </div>
      </Layout>
    )
  }
}

export default Home;