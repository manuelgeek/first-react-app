import './assets/css/App.css';
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

function App(props) {
  const count = useSelector((state) => state.counter.value)

  return (
    <div className="App">
      <Link className={'nav'} to="/">Home</Link>
      <Link className={'nav'} to="about">About</Link>
      <Link className={'nav'} to="login">Login</Link>
      <Link className={'nav'} to="register">Register</Link>
      <br/>
      <div>Counter: {count}</div>
      <Outlet />
    </div>
  );
}

export default App;
