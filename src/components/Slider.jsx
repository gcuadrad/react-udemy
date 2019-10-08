import React, {Component} from 'react';

class Slider extends Component {
  render(){
    return (
      <React.Fragment>
        <div id="slider" className={this.props.size}>
            <h1>{this.props.title}</h1>
            {this.props.button &&
              <a href="#" className="btn-white">{this.props.button}</a>
            }
        </div>
      </React.Fragment>
    )
  }
}

export default Slider;
