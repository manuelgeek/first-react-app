import React, {Component} from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.email = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.name.current.value)
  }

  render() {
    return (
      <div> <br/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.name} placeholder={'full name'}/> <br/> <br/>
          <input type="email" ref={this.email} placeholder={'email'}/> <br/> <br/>
          <textarea placeholder={'message'} /> <br/> <br/>
          <button type={"submit"}>Submit</button>
        </form>
      </div>
    );
  }
}

export default About;
