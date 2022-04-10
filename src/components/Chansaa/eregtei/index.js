import React, { Component } from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import tableStyle from "./index.css";
import img4 from "../../assets/zurag4.jpg";
import img5 from "../../assets/zurag5.jpg";
import img6 from "../../assets/zurag6.jpg";
import img7 from "../../assets/er1.jpeg";
import img8 from "../../assets/er2.jpeg";

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

  // componentWillMount() {
  //   document.querySelector("title").innerHTML = "Эрэгтэй ";
  //   // this.refreshList();
  // }

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

  render() {
    return (
      <div>
        <center>
          <div>
            <Carousel autoplay>
              <div>
                <img
                  alt=""
                  src={img4}
                  style={{
                    width: "1000px",
                    height: "650px",
                  }}
                />
              </div>
              <div>
                <img
                  alt=""
                  src={img5}
                  style={{
                    width: "1000px",
                    height: "650px",
                  }}
                />
              </div>
              <div>
                <img
                  alt=""
                  src={img6}
                  style={{
                    width: "1000px",
                    height: "650px",
                  }}
                />
              </div>
            </Carousel>
            <img alt="" src={img7} />
            <br />
            <img alt="" src={img8} />
          </div>
        </center>
      </div>
    );
  }
}

export default Home;
