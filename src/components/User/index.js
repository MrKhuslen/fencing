/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import { Layout, Menu, Icon, Select, Table, message, Modal, Input, Form, Upload, Button, Col } from 'antd';
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
      tloading: true,
      data: [],
      row: [],
      isModalVisible: false,
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Admin - E-How";
    this.refreshList();
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
    const columns = [
      {
        title: 'Нэр',
        dataIndex: 'firstname',
        key: 'firstname',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Овог',
        dataIndex: 'lastname',
        key: 'lastname',
      },
      {
        title: 'Төрөл',
        dataIndex: 'role',
        key: 'role',
        render: (text, row, index) => {
          if (index === 0) {
            return <span>Хэрэглэгч</span>;
          } else {
            return <span>Ажил олгогч</span>
          }
        },
      },
      {
        title: 'Регистрийн дугаар',
        dataIndex: 'registrno',
        key: 'registrno',
      },
      {
        title: 'Утасны дугаар',
        dataIndex: 'phoneno',
        key: 'phoneno',
      },
      {
        title: 'Хаяг',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Огноо',
        dataIndex: 'insymd',
        key: 'insymd',
      },
      {
        title: 'Шинэчлэгдсэн огноо',
        dataIndex: 'updymd',
        key: 'updymd',
      },
    ];
    return (
      <div>
        <Button type="primary" onClick={this.showModal} style={{ margin: "20px auto" }}>
          Хэрэглэгч баталгаажуулах
        </Button>
        <Modal title="Үйлчилгээ нэмэх" visible={isModalVisible} width={950} footer={null} onCancel={this.handleCancel}>
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
              label="Регистрийн дугаар"
              rules={[
                {
                  required: true,
                  message: 'Регистрийн дугаарыг оруулна уу!',
                },
              ]}
            >
              <Input
                placeholder="Регистр"
              />
            </Form.Item>
            <Form.Item
              name="name"
              label="Хаяг"
              rules={[
                {
                  required: true,
                  message: 'Хаягаа оруулна уу!',
                },
              ]}
            >
              <Input
                placeholder="Хаяг"
              />
            </Form.Item>
            <Form.Item
              name="avatar"
              label="Зураг"
              valuePropName="fileList"
              getValueFromEvent={this.normFile}
            >
              <Upload name="logo" action="//jsonplaceholder.typicode.com/posts/" accept={".jpg,.png,.jpeg,.gif"} listType="picture" onChange={this.handleChangeImg}>
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Form.Item>

            <Col span={12}>
              <Form.Item
                {...halfItemLayout}
                name="minprice"
                label="Үйлчилгээний үнэ(хамгийн бага)"
              >
                <Input
                  placeholder="Үнэ"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                {...halfItemLayout}
                name="maxprice"
                label="Үйлчилгээний үнэ(хамгийн их)"
              >
                <Input
                  placeholder="Үнэ"
                />
              </Form.Item>
            </Col>

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
              <Select
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