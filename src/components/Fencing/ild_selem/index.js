/* eslint-disable array-callback-return */
import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Typography } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LockOutlined,
} from "@ant-design/icons";

import "antd/dist/antd.css";
import tableStyle from "./index.css";
import img1 from "../../assets/Sabre2.svg";
import img2 from "../../assets/Sabre1.png";
// import img6 from '../assets/zurag6.jpg';
const { Title, Paragraph, Text, Link } = Typography;
const blockContent = `


  Илд сэлэм нь хөнгөн,  уян хатан бөгөөд цавчих,хатгах хэлбэрээр оноо авна.
  Хөлнөөс дээш их биеийн бүх хэсэгт сэлэмний аль ч хэсгээр хүрч оноо авах 
  боломжтой. Сэлэмний нийт урт  105 см, ирний урт 88 см байна.
 

 `;

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

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleRowClick = (record) => {
    this.setState({ row: record });
  };
  handleRowClass = (record) =>
    record.id === this.state.row.id ? tableStyle.selected : "";

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
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  render() {
    const { tloading, data, isModalVisible } = this.state;
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Илдэн сэлэм</h1>
        <Row>
          <Col span={16}>
            <Paragraph
              
              style={{
                display: "flex",
                justifyContent: "center",
                width: "1400px",
                height: "400px",
                
              }}
            >
              <pre style={{ textAlign: "center" }}>{blockContent}
              <br />
            <center>
              <img alt="" src={img2} style={{ width:"500px", height:"150px"}}/>
            </center></pre>
               
            </Paragraph>
           
          </Col>
          <Col span={8}>
            <img alt="" src={img1} />
          </Col>
        </Row>
        {/* <Row>
          <Col span={8}><img alt="" src={img2} /></Col>
          <Col span={16}></Col>
        </Row> */}
      </div>
    );
  }
}

export default Home;
