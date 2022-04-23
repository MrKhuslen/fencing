import React, { Component } from "react";
import axios from "axios";
import { List, Card, message, Col, Row, Divider, Radio } from "antd";
import "antd/dist/antd.css";
import img1 from "../assets/zurag1.png";
import img2 from "../assets/zurag2.png";
import img3 from "../assets/zurag3.png";
const options = [
  { label: "FEATURED", value: 1 },
  { label: "NEWS", value: 2 },
  { label: "RECENT", value: 3 },
];
const { Meta } = Card;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tloading: false,
      data: [],
      row: [],
      file: [],
      radiobutton: 1,
      news1: [],
      news2: [],
      news3: [],
    };
  }

  componentWillMount() {
    document.querySelector("title").innerHTML = "Нүүр хуудас";
    // this.refreshList();
  }
  /* 
    refreshList = async () => {
      this.setState({ tloading: true });
      let result = await fetch("http://192.168.1.61:8881/api/n0ews", {
        method: "GET",
      });
      result = await result.json();
      if (result.success === true) {
        this.setState({
          tloading: false,
          data: result.data,
          news1: result.data.slice(0, 5),
          news2: result.data.slice(6, 9),
          news3: result.data.slice(10, 13),
          news4: result.data.slice(4, 8),
          news5: result.data.slice(18, 21),
          news6: result.data.slice(22, 24),
        });
      } else {
        message.error(result.data);
      }
    };
   */
  onFinish = async (values) => {
    let test = new FormData();
    test.append("file", values.contractfile[0].originFileObj);
    test.append("image", values.upload[0].originFileObj);
    test.append("json", JSON.stringify(values));
    console.log(values);

    // const options = {
    //   method: "POST",
    //   data: test,
    //   url: `http://10.0.10.53:8881/api/addcategory`,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    let res = await axios(options).catch((err) => { });
  };

  handleRadioChange = (e) => {
    this.setState({ radiobutton: e.target.value });
  };

  render() {
    console.log("data", this.state.data, this.state.news1);
    return (
      <div className="site-layout" style={{ margin: "0 16em" }}>
        <Row justify="center">
          <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
            <a target="_blank" href="img_back1.jpeg">
              <Card
                hoverable
                style={{ width: 400, height: 450 }}
                cover={<img alt="" src={img2} />}
              >
                <Meta title="Шинэ элсэлт авч эхэллээ" />
              </Card>
            </a>
          </Col>
          <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 400, height: 450 }}
              cover={<img alt="" src={img1} />}
            >
              <Meta title="Туялзуур сэлэм бол гайхамшиг" />
            </Card>
          </Col>
          <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
            <Card
              hoverable
              style={{ width: 400, height: 450 }}
              cover={<img alt="" src={img3} />}
            >
              <Meta title="Маш олон давуу тал" />
            </Card>
          </Col>
        </Row>
        <div>
          <Row>
            <Col span={15}>
              <br />
              <Card style={{ marginTop: "54px" }}>
                <List
                  itemLayout="vertical"
                  size="large"
                  pagination={{
                    onChange: (page) => {
                      console.log(page);
                    },
                    pageSize: 4,
                  }}
                  loading={this.state.tloading}
                  renderItem={(item) => (
                    <List.Item
                      extra={<img width={272} alt="logo" src={item.image} />}
                      key={item.title}
                    >
                      <List.Item.Meta
                        title={item.title}
                        description={item.featuretxt}
                      />
                      {/* {item.description} */}
                    </List.Item>
                  )}
                  dataSource={this.state.news1}
                  footer={<div></div>}
                />
              </Card>
            </Col>

            <Col span={8} offset={1}>
              <br />

              <center>
                <Radio.Group
                  onChange={this.handleRadioChange}
                  style={{ textAlign: "center" }}
                  value={this.state.radiobutton}
                >
                  <Radio.Button value={1} defaultChecked>
                    FEATURED
                  </Radio.Button>
                  <Radio.Button value={2}>NEWS</Radio.Button>
                  <Radio.Button value={3}>RECENT</Radio.Button>
                </Radio.Group>
              </center>
              <br />
              <Card>
                {this.state.radiobutton === 1 ? (
                  <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.state.news4}
                    footer={<div></div>}
                    renderItem={(item) => (
                      <List.Item
                        key={item.key}
                        extra={<img width={95} alt="logo" src={item.image} />}
                      >
                        <List.Item.Meta
                          title={item.title}
                          description={item.featuretxt}
                        />
                        {item.content}
                      </List.Item>
                    )}
                  />
                ) : this.state.radiobutton === 2 ? (
                  <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.state.news3}
                    footer={<div></div>}
                    renderItem={(item) => (
                      <List.Item
                        key={item.title}
                        extra={<img width={95} alt="logo" src={item.image} />}
                      >
                        <List.Item.Meta
                          title={item.title}
                          description={item.featuretxt}
                        />
                      </List.Item>
                    )}
                  />
                ) : (
                  <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={this.state.news1}
                    footer={<div></div>}
                    renderItem={(item) => (
                      <List.Item
                        key={item.title}
                        extra={<img width={95} alt="logo" src={item.image} />}
                      >
                        <List.Item.Meta
                          // title={item.title}
                          description={item.featuretxt}
                        />
                      </List.Item>
                    )}
                  />
                )}
              </Card>
            </Col>
          </Row>
        </div>
        <Divider />
        <div>
          <h2>Нэмэлт мэдээ</h2>
          <Card>
            <Row>
              <Col span={12}>
                <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={this.state.news2}
                  footer={<div></div>}
                  renderItem={(item) => (
                    <List.Item
                      key={item.title}
                      extra={<img width={110} alt="logo" src={item.image} />}
                    >
                      <List.Item.Meta
                        // title={item.title}
                        description={item.featuretxt}
                      />
                    </List.Item>
                  )}
                />
              </Col>

              <Col span={12}>
                <List
                  itemLayout="vertical"
                  size="large"
                  dataSource={this.state.news3}
                  footer={<div></div>}
                  renderItem={(item) => (
                    <List.Item
                      key={item.title}
                      extra={<img width={110} alt="logo" src={item.image} />}
                    >
                      <List.Item.Meta
                        title={item.title}
                        description={item.featuretxt}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
