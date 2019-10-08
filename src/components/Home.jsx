import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
  render(){
    return (
      <React.Fragment>
        <Slider
          title="Welcome to the react course!"
          button="Blog"
          size="slider-big"
        />
        <div className="center">
          <div id='content'>
            <h1 class="subheader">Last Articles</h1>
          </div>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
