import React, { Component } from "react";
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
    document.querySelector("title").innerHTML = "Болж өнгөрсөн тэмцээн";
    // this.refreshList();
  }

  // refreshList = async () => {
  //   this.setState({ tloading: true });
  //   let result = await fetch("http://10.0.10.22:8881/api/news", {
  //     method: "GET",
  //   });
  //   result = await result.json();
  //   if (result.success === true) {
  //     this.setState({ tloading: false, data: result.data.slice(5, 23) })
  //   } else {
  //     message.error(result.data);
  //   }
  // };
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
        
        
      </div>
    );
  }
}

export default Home;
