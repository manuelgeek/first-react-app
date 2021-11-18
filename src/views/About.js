import React, {Component} from 'react';
import CountTwo from "../components/CountTwo";
import CountThree from "../components/CountThree";

class About extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
    this.state = {email: ''};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.name.current.value)
  }

  handleChange = (event) => {
    this.setState({email: event.target.value});
    console.log(this.state.email)
  }


  render() {
    return (
      <div> <br/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.name} placeholder={'full name'}/> <br/> <br/>
          <input type="email" ref={this.email} placeholder={'email'}/> <br/> <br/>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder={'message'} /> <br/> <br/>
          <button type={"submit"}>Submit</button>
        </form>
        <br/>
        <CountTwo />
        <br/>
        <br/>
        <CountThree />
      </div>
    );
  }
}

export default About;
