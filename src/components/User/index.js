/* eslint-disable array-callback-return */
import React, { Component } from "react";
import axios from "axios";
import {List,Card,message,Affix,Col,Row,Space} from "antd";
import "antd/dist/antd.css";
import tableStyle from "./index.css";
import img1 from "../assets/zurag1.png";
import img2 from "../assets/zurag2.png";
import img3 from "../assets/zurag3.png";
import img4 from "../assets/zurag11.jpg";
import img5 from "../assets/uat1.jpeg";
import img6 from "../assets/card3.jpeg";
import img7 from "../assets/card2.jpeg";


const listData = [];
for (let i = 0; i < 13; i++) {
  listData.push({
    href: "https://ant.design",
    title: `Багачуудын УАШТ `,

    description: "",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}
const listedData = [];
for (let i = 0; i < 2; i++) {
  listedData.push({
    href: "https://ant.design",
    title: `УЛСЫН АВАРГА ШАЛГАРУУЛАХ ТЭМЦЭЭН `,

    description: "",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}
const listData1 = [];
for (let i = 0; i < 3; i++) {
  listData1.push({
    href: "https://ant.design",
    title: `Мэдээлэл `,

    description: "Сайн байна",
    content:
      "Хамгийн сонин мэдээлэл",
  });
}
const listData2 = [];
for (let i = 0; i < 3; i++) {
  listData2.push({
    href: "https://ant.design",
    title: `Мэдээ `,

    description: "мундаг",
    content:
      "Хамгийн сонирхолтой мэдээ",
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const { Meta } = Card;

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

  refreshList = async () => {
    this.setState({ tloading: false });
    let result = await fetch("http://10.0.10.11:8881/api/category", {
      method: "GET",
    });
    result = await result.json();
    if (result.success === true) {
      this.setState({ tloading: false, data: result.data });
    } else {
      message.error(result.data);
    }
  };

  onFinish = async (values) => {
    let test = new FormData();
    test.append("file", values.contractfile[0].originFileObj);
    test.append("image", values.upload[0].originFileObj);
    test.append("json", JSON.stringify(values));
    console.log(values);

    const options = {
      method: "POST",
      data: test,
      url: `http://10.0.10.11:8881/api/addcategory`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    let res = await axios(options).catch((err) => {});
  };

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
      <div style={{ margin: "0 16em" }}>
        <Row justify="center">
          <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 360 }}
              cover={<img alt="" src={img2} />}
            >
              <Meta title="Шинэ элсэлт авж эхэллээ" />
            </Card>
          </Col>
          <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 360 }}
              cover={<img alt="" src={img1} />}
            >
              <Meta title="Туялзуур сэлэм бол гайхамшиг" />
            </Card>
          </Col>
          <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 360 }}
              cover={<img alt="" src={img3} />}
            >
              <Meta title="Маш олон давуу тал" />
            </Card>
          </Col>
        </Row>
        <div>
          <Row>
            <Col span={16}>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 7,
                }}
                dataSource={listData}
                footer={<div></div>}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    extra={<img width={272} alt="logo" src={img4} />}
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

            <Col span={8}>
              <Affix
                offset={120}
                onChange={(affixed) => console.log(affixed)}
              >
                <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={listedData}
                  footer={<div></div>}
                  renderItem={(item) => (
                    <List.Item
                      key={item.title}
                      extra={<img width={95} alt="logo" src={img5} />}
                    >
                      <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
                ,
              </Affix>
            </Col>
          </Row>
        </div>
       <div><h2 >Features and Guides</h2>
          <Row >
            <Col span={12}>
            <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={listData1}
                  footer={<div></div>}
                  renderItem={(item) => (
                    <List.Item
                      key={item.title}
                      extra={<img width={110} alt="logo" src={img6} />}
                    >
                      <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
                ,
            </Col>
            <Col span={12}>
            <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={listData2}
                  footer={<div></div>}
                  renderItem={(item) => (
                    <List.Item
                      key={item.title}
                      extra={<img width={110} alt="logo" src={img7} />}
                    >
                      <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                      />
                      {item.content}
                    </List.Item>
                  )}
                />
                ,
            </Col>
          </Row>

       </div>
      </div>
    );
  }
}

export default Home;
