import React, { Component } from "react";
import axios from "axios";
import { message, Typography, Col, Row, Select, Card } from "antd";
import "antd/dist/antd.css";
import tableStyle from "./index.css";
import img1 from "../assets/LOGO.png";
import img2 from "../assets/zurag10.jpg";
import img3 from "../assets/zurag2.png";
import img4 from "../assets/zurag4.jpg";
// import { Swiper } from 'swiper';

//  const  params ={
//    slidesPerView:3,
//    spaceBetween:20,
//    navigation:{
//      nextEl:'.swiper-button-next',
//      prevnEl:'.swiper-button-prev'
//    }
//  }
const { Option } = Select;
function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#E67E22",
};
const { Paragraph } = Typography;
const blockContent = `
Duel fencing клуб нь 2014 оноос үйл ажиллагаагаа явуулж эхэлсэн. 
Насанд хүрэгчдийн анхан болон гүнзгий шатны ангиуддаа тогтмол элсэлт
авч байгаа бөгөөд бага насны хүүхдүүдэд зориулсан тусгай хөтөлбөрийн 
дагуу хичээллэдэг ангиуд амралтын өдрүүдэд хичээллэж байна.
 `;

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
    document.querySelector("title").innerHTML = "Бидний тухай";
    // this.refreshList();
  }

  refreshList = async () => {
    this.setState({ tloading: false });
    let result = await fetch("http://10.0.10.38:8881/api/category", {
      method: "GET",
    });
    result = await result.json();
    if (result.success === true) {
      this.setState({ tloading: false, data: result.data });
    } else {
      message.error(result.data);
    }
  };

  render() {
    return (
      <div>
        <div className="homeBackground" />
        <Row>
          <Col span={5} />

          <Col span={14}>
            <Card>
              <h1 style={{ textAlign: "center", fontSize: "40px" }}>
                {" "}
                Бидний тухай
              </h1>
              <Row>
                <Col span={8}>
                  <h1 className="H1"> ЭВ НЭГДЛИЙГ ЭРХЭМЛЭГЧ</h1>
                </Col>
                <Col span={8}>
                  <img alt="" class="circular--square" src={img1} />
                </Col>
                <Col span={8}>
                  <h1 className="H1"> ДУЭЛЬ ТУЯЛЗУУР СЭЛЭМНИЙ КЛУБ</h1>
                </Col>
              </Row>
              <Paragraph>
                <pre style={{ textAlign: "center" }}>{blockContent}</pre>
              </Paragraph>
              {/* <Swiper {...params}> */}

              {/* <div className="People" style={contentStyle}>
                <Row >
                  <Col span="6"><img alt="" class="circular--square" src={img1} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img1} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img1} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img1} /></Col>
                </Row>
        
                </div>
                <div className="People" style={contentStyle}>
                <Row>
                  <Col span="6"><img alt="" class="circular--square" src={img2} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img2} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img2} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img2} /></Col>
                </Row>
                </div>
                <div className="People" style={contentStyle}>
                <Row >
                  <Col span="6"><img alt="" class="circular--square" src={img3} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img3} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img3} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img3} /></Col>
                </Row>
                </div>
                <div className="People">
                <Row style={contentStyle}>
                  <Col span="6"><img alt="" class="circular--square" src={img1} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img2} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img3} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img1} /></Col>
                </Row>
                </div>
                <div className="People">
                <Row style={contentStyle}>
                  <Col span="6"><img alt="" class="circular--square" src={img2} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img1} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img1} /></Col>
                  <Col span="6"><img alt="" class="circular--square" src={img3} /></Col>
                </Row>
                </div> */}
              {/*                 
                </Swiper> */}
            </Card>
          </Col>
          <Col span={5} />
        </Row>
      </div>
    );
  }
}

export default Home;
