import React, { Component } from "react";
import axios from "axios";
import { message, Button, InputNumber, Form, Input, Col, Row } from "antd";
import "antd/dist/antd.css";
import tableStyle from "./index.css";
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
    document.querySelector("title").innerHTML = "Элсэлт";
    // this.refreshList();
  }

  refreshList = async () => {
    this.setState({ tloading: false });
    let result = await fetch("http://10.0.10.22:8881/api/category", {
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
      url: `http://10.0.10.22:8881/api/addcategory`,
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
    return (
      <div>
        <Row>
          <Col span={5}></Col>
          <Col span={14}>
            <h1 style={{ textAlign: "center" }} > Бүргэлтийн хэсэг</h1>
            <Form
              name="wrap"
              labelCol={{
                flex: "200px",
              }}
              labelAlign="center"
              labelWrap
              wrapperCol={{
                flex: 1,
              }}
              colon={false}
            >
              <Form.Item
                label="Овог"
                name="Овогоо оруулна уу"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{
                    width: "300px",
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Нэр"
                name="Нэрээ оруулна уу"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{
                    width: "300px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name={["user", "age"]}
                label="Нас"
                rules={[
                  {
                    required: true,
                    type: "number",
                    min: 0,
                    max: 120,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["user", "undur"]}
                label="Өндөр"
                rules={[
                  {
                    required: true,
                    type: "number",
                    min: 60,
                    max: 250,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["user", "jin"]}
                label="Жин"
                rules={[
                  {
                    required: true,
                    type: "number",
                    min: 10,
                    max: 250,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "250px",
                  }}
                />
              </Form.Item>

              <Form.Item label=" ">
                <Button type="primary" htmlType="submit">
                  Илгээх
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col span={5}></Col>
        </Row>
      </div>
    );
  }
}

export default Home;
