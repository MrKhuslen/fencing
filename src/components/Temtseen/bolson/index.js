/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import axios from "axios"
import {  List, Avatar, Space, Row, Col, Icon, Carousel, img, message, Button, Modal, Form, Input, Upload } from 'antd';
import { UserOutlined, MessageOutlined, LikeOutlined, StarOutlined, UploadOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import tableStyle from './index.css';
 import img4 from '../../assets/zurag11.jpg';



const listData = [];
for (let i = 0; i < 9; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `Багачуудын УАШТ ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      '',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
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
      setIsModalVisible: false,
      file: [],
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Бүртгэл";
    // this.refreshList();
  }

  // refreshList = async () => {
  //   this.setState({ tloading: true });
  //   let result = await fetch("http://10.0.10.11:8881/api/category", {
  //     method: "GET",
  //   })
  //   result = await result.json();
  //   if (result.success === true) {
  //     this.setState({ tloading: false, data: result.data });
  //   } else {
  //     message.error(result.data)
  //   }
  // }

  // onFinish = async (values) => {

  //   let test = new FormData();
  //   test.append("file", values.contractfile[0].originFileObj)
  //   test.append("image", values.upload[0].originFileObj)
  //   test.append("json", JSON.stringify(values))
  //   console.log(values)


  //   const options = {
  //     method: "POST",
  //     data: test,
  //     url: `http://10.0.10.11:8881/api/addcategory`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   let res = await axios(options).catch((err) => {
  //   });
  // };

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
       
          <Col span={24}>
          <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        
        extra={
          <img
            width={272}
            alt="logo"
             src={img4}
          />
        }
      >
        <List.Item.Meta
        
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />,
          </Col>
    
       </Row>
      </div>
    )
  }
}

export default Home;