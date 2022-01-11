// import React, { Component } from 'react';
// import { browserHistory } from 'react-router-dom';
// import { Drawer, Button, Space, message } from 'antd';
// import { UserOutlined, DrawerProps } from '@ant-design/icons';
// import team from '../../team.png';
// import './index.css';
// import Home from '../Temtseen copy';
// const App = () => {
//   const [visible, setVisible] = useState(false);
//   const [size, setSize] = useState();

//   const showDefaultDrawer = () => {
//     setSize("default");
//     setVisible(true);
//   };

//   const showLargeDrawer = () => {
//     setSize("large");
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = this.state;
//     console.log('password: ', password, username);

//   }

//   onFinish = async (values) => {
//     let result = await fetch("http://10.0.10.11:8881/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(values)
//     })
//     result = await result.json();
//     if (result.success === true) {
//       message.success("Амжилттай")
//       this.props.history.push("/home");
//     } else {
//       message.error(result.data)
//     }
//   };

//   onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   // onChange = ({ name, e }) => {
//   //   let username;
//   //   let password;
//   //   if (name === 'password') {
//   //     username = e.target.value
//   //   } else {
//   //     password = e.target.value
//   //   }
//   //   this.setState({ username, password });
//   // }

//   render() {
//     return (
//       <div>
//          <Space>
//         <Button type="primary" onClick={showDefaultDrawer}>
//           Open Default Size (378px)
//         </Button>
//         <Button type="primary" onClick={showLargeDrawer}>
//           Open Large Size (736px)
//         </Button>
//       </Space>
//       <Drawer
//         title={`${size} Drawer`}
//         placement="right"
//         size={size}
//         onClose={onClose}
//         visible={visible}
//         extra={
//           <Space>
//             <Button onClick={onClose}>Cancel</Button>
//             <Button type="primary" onClick={onClose}>
//               OK
//             </Button>
//           </Space>
//         }
//       >
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Drawer>
   

//       </div>
//     )
//   }
// }

// export default Home;

