/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Select } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, BarChartOutlined, CloudOutlined, AppstoreOutlined, TeamOutlined, ShopOutlined } from '@ant-design/icons';
import Main from '../Main/index.js';
import Login from '../Login/index.js';
import Home from '../Home/index.js';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }


  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/" component={Main} />
          </Switch> 
        </div>
      </Router>
    )
  }
}

export default App;