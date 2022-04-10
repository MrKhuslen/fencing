import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Layout, Menu } from 'antd';
import Home from '../Home/index.js';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;



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
            <Route path="/" component={Home} />
          </Switch> 
        </div>
      </Router>
    )
  }
}

export default App;