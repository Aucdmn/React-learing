import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';

// 计时器
// function tick() {
//   const element = (
//       <div>
//           <h1>Hello, world!</h1>
//           <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);
// ----------------------------------------------------------------


// 测试 props 功能
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// function App() {
//   return (
//     <div>
//       <Welcome name = "Mihara" />
//       <Welcome name = "Yohji" />
//       <Welcome name = "Nigel" />
//     </div>
//   )
// }

// 测试 props 功能
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );
// ----------------------------------------------------------------


// 时钟展示器
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hell No</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// 时钟展示器
// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// ----------------------------------------------------------------


// 登录控制展示
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn =  this.state.isLoggedIn;
//     let button;

//     if(isLoggedIn) {
//       button = <LogoutButton onClick = {this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick = {this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn = {isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick = {props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick = {props.onClick}>
//       Logout
//     </button>
//   );
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );
// ----------------------------------------------------------------


// 收件箱
// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 && 
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       } 
//     </div>
//   );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React', '4th'];
// ReactDOM.render(
//   <Mailbox unreadMessages = {messages} />,
//   document.getElementById('root')
// );

// 数字列表
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => 
//     <li key = {number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [2, 4, 6, 8, 10];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById("root")
// );

// 测试 state + 运算符

class Test extends React.Component{
  constructor(props) {
    super(props);
    this.state = {dStatus: false};
    // this.state = this.state.bind(this)
    // const dStatus = this.state.dStatus;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = () => {
    this.setState({
      dStatus: !this.dStatus,
    })
    alert("changed");
  }

  handleAlert = () => {
    alert("666");
  }

  render() {
    return (
      <div className = "right">
        <button onClick = {this.handleChange}>{this.dStatus ? "false" : "true"}</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Test />,
  document.getElementById("root")
);

