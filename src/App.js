import './assets/css/App.css';
import {Link, Outlet} from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Link className={'nav'} to="/">Home</Link>
      <Link className={'nav'} to="about">About</Link>
      <Outlet />
    </div>
  );
}

export default App;
