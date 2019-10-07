import React, {Component} from 'react';
import StaticMessage from './StaticMessage';

class Movies extends Component{
  render(){
    return (
      <React.Fragment>
        <h4>Im the movies component</h4>
        <StaticMessage />
      </React.Fragment>
    );
  }
}

export default Movies;
