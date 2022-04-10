/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import {message} from 'antd';
import 'antd/dist/antd.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      tloading: false,
      data: [],
      row: [],
      isModalVisible: false,
      setIsModalVisible: false,
      file: [],
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Бүртгэл";
    // this.refreshList();
  }

  refreshList = async () => {
    this.setState({ tloading: false });
    let result = await fetch("http://10.0.10.11:8881/api/category", {
      method: "GET",
    })
    result = await result.json();
    if (result.success === true) {
      this.setState({ tloading: false, data: result.data });
    } else {
      message.error(result.data)
    }
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