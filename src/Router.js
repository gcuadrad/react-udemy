import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';
import Blog from './components/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './components/Movies';
import Form from './components/Form';
import SectionTest from './components/SectionTest';
import Error from './components/Error';

class Router extends Component {

  render() {
    return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/movies" component={Movies} />

          <Route exact path="/test" component={SectionTest} />
          <Route exact path="/params-test/:id/:optional?" render= { (props) => {
            let id = props.match.params.id;
            let optional = props.match.params.optional;
              return (
                <React.Fragment>
                  <div id="content">
                    <h1 class='subheader'>Test Params</h1>
                    <h2>param: {id}</h2>
                    <h2>{optional &&
                       <React.Fragment>
                         optional param: {optional}
                       </React.Fragment>
                    }</h2>
                  </div>
                </React.Fragment>
              )
          }} />
          <Route component={Error} />
        </Switch>
      <div className="clearfix"></div>
      <Footer />
    </BrowserRouter>
    );
  }
}

export default Router;
