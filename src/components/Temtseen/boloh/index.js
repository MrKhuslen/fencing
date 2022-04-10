import React, { Component } from "react";
import { List, Row, Col, message, Card } from "antd";
import "antd/dist/antd.css";
import tableStyle from "./index.css";
// import img4 from "../../assets/zurag11.jpg";

const listData = [];
for (let i = 0; i < 4; i++) {
  listData.push({
    href: "https://ant.design",
    title: `Багачуудын УАШТ ${i}`,
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
      collapsed: false,
      tloading: false,
      data: [],
      row: [],
      isModalVisible: false,
      file: [],
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Удахгүй болох тэмцээн";
    this.refreshList();
  }

  refreshList = async () => {
    this.setState({ tloading: true });
    let result = await fetch("http://192.168.1.61:8881/api/news", {
      method: "GET",
    });
    result = await result.json();
    if (result.success === true) {
      this.setState({ tloading: false, data: result.data.slice(5, 11) });
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
