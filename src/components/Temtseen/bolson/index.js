import React, { Component } from "react";
import { List, Row, Col, message, Card } from "antd";
import "antd/dist/antd.css";
// import img4 from "../../assets/zurag11.jpg";

const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    href: "https://ant.design",
    title: `Өвлийн сорил тэмцээн ${i}`,
    avatar: "https://joeschmoe.io/api/v1/random",
    description: "",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tloading: false,
      data: [],
      row: [],
      isModalVisible: false,
      file: [],
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Болж өнгөрсөн тэмцээн";
    this.refreshList();
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

  refreshList = async () => {
    this.setState({ tloading: true });
    let result = await fetch("http://192.168.1.61:8881/api/news", {
      method: "GET",
    });
    result = await result.json();
    if (result.success === true) {
      this.setState({ tloading: false, data: result.data.slice(0, 6) });
    } else {
      message.error(result.data);
    }
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={5} />

          <Col span={14}>
            <Card>
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: (page) => {
                    console.log(page);
                  },
                  pageSize: 6,
                }}
                dataSource={this.state.data}
                renderItem={(item) => (
                  <List.Item
                    key={item.title}
                    extra={<img width={272} alt="logo" src={item.image} />}
                  >
                    <List.Item.Meta
                      title={item.title}
                      description={item.featuretxt}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>

          <Col span={5} />
        </Row>
      </div>
    );
  }
}

export default Home;
