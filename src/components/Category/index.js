/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import axios from "axios"
import { Layout, Menu, Icon, Select, Table, message, Button, Modal, Form, Input, Upload } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import tableStyle from './index.css';

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
      tloading: true,
      data: [],
      row: [],
      isModalVisible: false,
      setIsModalVisible: false,
      file: [],
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Бүртгэл";
    this.refreshList();
  }

  refreshList = async () => {
    this.setState({ tloading: true });
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

  onFinish = async (values) => {

    let test = new FormData();
    test.append("file", values.contractfile[0].originFileObj)
    test.append("image", values.upload[0].originFileObj)
    test.append("json", JSON.stringify(values))
    console.log(values)


    const options = {
      method: "POST",
      data: test,
      url: `http://10.0.10.11:8881/api/addcategory`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    let res = await axios(options).catch((err) => {
    });
  };

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
    const columns = [
      {
        title: 'Д.д',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Нэр',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Гэрээний дугаар',
        dataIndex: 'contractid',
        key: 'contractid',
      },
      {
        title: 'Огноо',
        dataIndex: 'insymd',
        key: 'insymd',
      },
    ];
    return (
      <div>
        <Button type="primary" onClick={this.showModal} style={{ margin: "20px auto" }}>
          Үйлчилгээ нэмэх
        </Button>
        <Modal title="Үйлчилгээ нэмэх" visible={isModalVisible} width={650} footer={null} onCancel={this.handleCancel}>
          <Form
            name="validate_other"
            {...formItemLayout}
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            style={{ margin: "auto" }}
          >
            <Form.Item
              name="name"
              label="Үйлчилгээний нэр"
              rules={[
                {
                  required: true,
                  message: 'Үйлчилгээний нэрийг оруулна уу!',
                },
              ]}
            >
              <Input
                placeholder="Нэр"
              />
            </Form.Item>
            <Form.Item
              name="upload"
              label="Зураг"
              valuePropName="fileList"
              getValueFromEvent={this.normFile}
            >
              <Upload name="logo" action="//jsonplaceholder.typicode.com/posts/" accept={".jpg,.png,.jpeg,.gif"} listType="picture" onChange={this.handleChangeImg}>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item
              name="contractid"
              label="Гэрээний дугаар"
              rules={[
                {
                  required: true,
                  message: 'Гэрээний дугаарыг оруулна уу!',
                },
              ]}
            >
              <Input
                placeholder="Гэрээний дугаар"
              />
            </Form.Item>
            <Form.Item
              name="contractfile"
              label="Гэрээний файл"
              valuePropName="fileList"
              getValueFromEvent={this.normFile}
            >
              <Upload name="logo" action="//jsonplaceholder.typicode.com/posts/" accept={".docx,.xlsx,.pdf"} listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item style={{ justifyContent: "center" }}>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Хадгалах
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Table
          rowClassName={this.handleRowClass}
          loading={tloading}
          dataSource={data}
          columns={columns}
          size="small"
          bordered
          rowKey={record => record.id}
          pagination={{
            defaultPageSize: 50, showSizeChanger: true, showQuickJumper: true, pageSizeOptions: ['50', '100', '200'],
          }}
          onRow={record => ({
            onClick: () => this.handleRowClick(record),
          })}
        />
      </div>
    )
  }
}

export default Home;