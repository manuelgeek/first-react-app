import React, {Component} from 'react';
import CountDown from "../components/CountDown";
import CountDownHooked from "../components/CountDownHooked";
import Count from "../components/Count";
import logo from "../logo.svg";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <CountDown />
          <CountDownHooked />
          <Count/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
