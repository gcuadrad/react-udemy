import React,{Component} from 'react';
import MyComponent from './examples/MyComponent'
import Movies from './examples/Movies'


class SectionTest extends Component {

  // large form
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     counter: 0
  //   }
  // }
  // short form
  state = {
    counter: 0
  }

  substract = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  add = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
    return (
      <React.Fragment>
        <h2 className="subheader">Components</h2>
        <MyComponent />
        <Movies />
        <h2 className="subheader">States</h2>
        <p>
          counter: {this.state.counter}
        </p>
        <p>
          <input type="button" value="+" onClick={this.add} />
          <input type="button" value="-" onClick={this.substract} />
        </p>
      </React.Fragment>
    );
  }
}

export default SectionTest;
