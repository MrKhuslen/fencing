import React, { Component } from 'react';
import axios from "axios"
import {message} from 'antd';
import 'antd/dist/antd.css';
import tableStyle from './index.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      tloading: false,
      data: [],
      row: [],
      isModalVisible: false,
      file: [],
    };
  }
  render() {
    return (
      <div>
        test
      </div>
    )
  }
}

export default Home;