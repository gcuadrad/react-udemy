import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Movies from './components/Movies';
import SectionTest from './components/SectionTest';
import Error from './components/Error';

class Router extends Component {

  render() {
    return (
    <BrowserRouter>
      <Header />
      <Slider />
        <div className="center">
            <section id="content">
              <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/home" component={Movies} />
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
            </section>
          <Sidebar />
        </div>
      <div className="clearfix"></div>
      <Footer />
    </BrowserRouter>
    );
  }
}

export default Router;
