import React, {Component} from 'react';

class CountDown extends Component {
  constructor(props) {
    super(props)
   this.state = {count: 0}
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => ({
        count: state.count + 1
      }))
    }, 1000)
  }

  render() {
    return (
      <div>
        <h2>Timer {this.state.count}</h2>
      </div>
    );
  }
}

export default CountDown;
