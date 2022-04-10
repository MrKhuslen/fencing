import React, { Component } from "react";
import axios from "axios";
import {
  message,
  Button,
  InputNumber,
  Form,
  Input,
  Radio,
  Col,
  Row,
  Select,
  Card,
} from "antd";
import "antd/dist/antd.css";
const { Option } = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 80}} >
      <Option value="976">+976</Option>
    </Select>
  </Form.Item>
);

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tloading: false,
      data: [],
      row: [],
      file: [],
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Элсэлт";
  }

  // onFinish = async (values) => {
  //   let test = new FormData();
  //   test.append("file", values.contractfile[0].originFileObj);
  //   test.append("image", values.upload[0].originFileObj);
  //   test.append("json", JSON.stringify(values));
  //   console.log(values);

  //   const options = {
  //     method: "POST",
  //     data: test,
  //     url: `http://10.0.10.38:8881/api/addcategory`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   let res = await axios(options).catch((err) => {});
  // };
   onSubmit = () => {
    this.props.form.validateFields(async (err, values) => {
      const options = {
        method: "POST",
        url: `http://10.0.10.53:8881/api/elselt`,
        headers: {
          "Content-Type": "application/json",
        },
      };
      let res = await axios(options).catch((err) => {});

      if(res.status === "Success"){
        message.success("Amjilttai");
      } else {
        message.error("Buruu")
      }
    });
   }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className="homeBackground"></div>
        <Row>
          <Col span={5}></Col>

          <Col span={14}>
            <Card className="Card1">
              <h1 style={{ textAlign: "center", fontSize: "40px" }}>
                {" "}
                Бүртгэлийн хэсэг
              </h1>
              <h1 style={{ textAlign: "left", fontSize: "20px" }}>
                {" "}
                1.Ерөнхий мэдээлэл:
              </h1>

              <Form
                name="wrap"
                labelCol={{
                  flex: "200px",
                }}
                labelAlign="center"
                wrapperCol={{
                  flex: 1,
                }}
                colon={false}
              >
                <Form.Item label="Овог" name="Овогоо оруулна уу">
                  {getFieldDecorator("lastname", {
                    initialValue: "",
                    rules: [
                      { required: true, message: "Та овогоо оруулна уу." },
                    ],
                  })(
                    <Input
                      placeholder="Овог оруулах хэсэг"
                      style={{
                        width: "300px",
                      }}
                    />,
                  )}
                </Form.Item>

                <Form.Item label="Нэр" name="Нэрээ оруулна уу">
                  {getFieldDecorator("firstname", {
                    initialValue: "",
                    rules: [{ required: true, message: "Нэрээ оруулана уу!" }],
                  })(
                    <Input
                      placeholder="Нэр оруулах хэсэг"
                      style={{
                        width: "300px",
                      }}
                    />,
                  )}
                </Form.Item>

                <Form.Item name="Насаа оруулна уу" label="Нас">
                  {getFieldDecorator("age", {
                    initialValue: "",
                    rules: [{ required: true, message: "Насаа оруулна уу!" }],
                  })(<InputNumber placeholder="Нас" />,)}
                </Form.Item>
                <Form.Item
                  label="Регистрийн дугаар"
                  name="Регистрийн дугаар уу"
                >
                  {getFieldDecorator("rdnumber", {
                    initialValue: "",
                    rules: [
                      { required: true, message: "Регистрийн дугаар уу!" },
                    ],
                  })(
                    <Input
                      style={{
                        width: "300px",
                      }}
                      placeholder="Регистрийн дугаар оруулах хэсэг"
                    />,
                  )}
                </Form.Item>

                <Form.Item name="radio-group" label="Хүйс:">
                  {getFieldDecorator("male", {
                    initialValue: "",
                    rules: [
                      { required: true, message: "Та хүйсээ оруулна уу?" },
                    ],
                  })(
                    <Radio.Group>
                      <Radio value={1}>Эрэгтэй</Radio>
                      <Radio value={2}>Эмэгтэй</Radio>
                      <Radio value={3}>Бусад</Radio>
                    </Radio.Group>,
                  )}
                </Form.Item>

                <h1 style={{ textAlign: "left", fontSize: "20px" }}>
                  {" "}
                  2.Холбогдох хаяг:
                </h1>
                <Form.Item name={["Майл хаягаа оруулна уу"]} label="Email">
                  {getFieldDecorator("email", {
                    initialValue: "",
                    rules: [
                      { required: true, message: "Майл хаягаа оруулна уу!" },
                    ],
                  })(
                    <Input
                      placeholder="Майл хаягаа оруулах хэсэг"
                      style={{
                        width: "250px",
                      }}
                    />,
                  )}
                </Form.Item>
                <Form.Item name="phone" label="Утасны дугаар:">
                  {getFieldDecorator("phonenumber", {
                    initialValue: "",
                    rules: [
                      {
                        required: true,
                        message: "Утасны дугаараа оруулна уу!",
                      }
                    ],
                  })(
                    <Input
                      placeholder="Дугаар хийх хэсэг"
                      addonBefore={prefixSelector}
                      style={{ width: "300px"  }}
                    />,
                  )}
                </Form.Item>
                <h1 style={{ textAlign: "left", fontSize: "20px" }}>
                  <Form.Item label="Гэрийн хаяг:">
                    <Input.Group compact>
                      <Form.Item name={["address", "province"]} noStyle>
                        {getFieldDecorator("district", {
                          initialValue: [],
                          rules: [
                            {
                              required: true,
                              message: "Дүүргээ сонгоно уу!",
                            },
                          ],
                        })(
                        <Select placeholder="Дүүрэг сонгох" style={{ width: 200}}>
                          <Option value="bayanzvrh">Баянзүрх дүүрэг</Option>
                          <Option value="bayngol">Баянгол дүүрэг</Option>
                          <Option value="Chingeltei">Чингэлтэй дүүрэг</Option>
                          <Option value="SonginoHairhan">
                            Сонгино-хайрхан дүүрэг
                          </Option>
                          <Option value="Svhbaatar">Сүхбаатар дүүрэг</Option>
                          <Option value="hanUul">Хан-уул дүүрэг</Option>
                          <Option value="Nalaih">Налайх дүүрэг</Option>
                        </Select>,
                        )}
                      </Form.Item>
                      <Form.Item name={["address", "street"]} noStyle>
                        {getFieldDecorator("address", {
                          initialValue: "",
                          rules: [
                            {
                              required: true,
                              message: "Гэрийн хаягаа оруулна уу!",
                            },
                          ],
                        })(
                          <Input
                            style={{ width: 290 }}
                            placeholder="Хороо,Байр,Гудамж, Тоот оруулах"
                          />,
                        )}
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>{" "}
                  3.Шаардлагатай үед холбоо барих хүний мэдээлэл:
                  <Form.Item label="Таны юу болох:" name="Таны юу болох:">
                    {getFieldDecorator("relation", {
                      initialValue: "",
                      rules: [{ required: true, message: "Таны хэн болох талаар оруулна уу" }],
                    })(
                      <Input
                        placeholder="Таны юу болох "
                        style={{
                          width: "300px",
                        }}
                      />,
                    )}
                  </Form.Item>
                  <Form.Item
                    label="Нэр"
                    name="Нэрээ оруулна уу"
                  >
                    {getFieldDecorator("relationname", {
                      initialValue: "",
                      rules: [
                        { required: true, message: "Нэрээ оруулана уу!" },
                      ],
                    })(
                      <Input
                        placeholder="Нэр оруулах хэсэг"
                        style={{
                          width: "300px",
                        }}
                      />,
                    )}
                  </Form.Item>
                  <Form.Item name="phone1" label="Утасны дугаар:">
                    {getFieldDecorator("relationphonenumber", {
                      initialValue: "",
                      rules: [{ required: true, message: "Утасны дугаараа оруулна уу!" }],
                    })(
                      <Input
                        placeholder="Дугаар хийх хэсэг"
                        addonBefore={prefixSelector}
                        style={{ width: "300px" }}
                      />,
                    )}
                  </Form.Item>
                  4.Биеийн ерөнхий үзүүлэлт:
                  <Form.Item name={["user", "undur"]} label="Өндөр">
                    {getFieldDecorator("height", {
                      initialValue: "",
                      rules: [
                        { required: true, message: "Өндөрөө оруулна уу!" },
                      ],
                    })(<InputNumber placeholder="Өндөр" min={50} max={250} />,)}
                  </Form.Item>
                </h1>
                <Form.Item name={["Жингээ оруулна уу !"]} label="Жин">
                  {getFieldDecorator("weight", {
                    initialValue: "",
                    rules: [{ required: true, message: "Жингээ оруулна уу!" }],
                  })(<InputNumber placeholder="Жин" min={10} max={250} />,)}
                </Form.Item>

                <Form.Item label=" ">
                  <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
                    Илгээх
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={5}></Col>
        </Row>
      </div>
    );
  }
}

export default Form.create({ name: "register" })(Home);

