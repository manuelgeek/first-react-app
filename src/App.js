import logo from './logo.svg';
import './assets/css/App.css';
import Count from "./components/Count";
import CountDown from "./components/CountDown";
import CountDownHooked from "./components/CountDownHooked";

function App() {
  return (
    <div className="App">
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

export default App;
