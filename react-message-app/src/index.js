import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// const element = <div><span>Hello,</span> <span>Jane</span></div>;
// const name = "Jane";
const user = {
    firstName: "Jane",
    lastName: "Doe"
  }
const element = <p>Hello, {user.firstName} {user.lastName} {6+6}</p>

ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
