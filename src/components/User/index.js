/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Card, message, Modal, Input, Form, Upload, Button, Col } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import tableStyle from './index.css';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const halfItemLayout = {
  labelCol: { span: 12 },
  wrapperCol: { span: 10 },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      tloading: false,
      data: [],
      row: [],
      isModalVisible: false,
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Хяналтын самбар";
    // this.refreshList();
  }

  refreshList = async () => {
    this.setState({ tloading: true });
    let result = await fetch("http://10.0.10.11:8881/api/user", {
      method: "GET",
    })
    result = await result.json();
    if (result.success === true) {
      this.setState({ tloading: false, data: result.data });
    } else {
      message.error(result.data)
    }
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleRowClick = (record) => { this.setState({ row: record }); }
  handleRowClass = record => (record.id === this.state.row.id ? tableStyle.selected : '');

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

  handleChangeImg = ({ fileList }) => {
    if (this.state.size) {
      this.setState({ file: fileList });
      this.props.form.setFieldsValue({ file: fileList });
    }
  };

  normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  render() {
    const { tloading, data, isModalVisible } = this.state;
    return (
      <div>
<Row>
<Col>
  <Card>test</Card>
</Col>
<Col>
  <Card>test2</Card>
</Col>
<Col>
  <Card>test2</Card>
</Col>
</Row>
      </div>
    )
  }
}

export default Home;