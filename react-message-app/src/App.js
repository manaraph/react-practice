// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from 'react';
import './App.css';
// import MessageView from './messages/message-view';
import MessageList from './messages/message-list';
class App extends Component {

  render(){
    // const headerStyle = {
    //   color: '#ff0000',
    //   textDecoration: 'underline'
    // }
    return (
      // <div>
      //   <h2 style={headerStyle}>Hello World Again!</h2>
      //   <h2 style={{color:'#ff0ee0'}}>My name is M4</h2>
      // </div>
      // <MessageView />
      <MessageList />
    )
  }

}

export default App;
