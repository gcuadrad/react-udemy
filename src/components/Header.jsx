import React, {Component} from 'react';
import Logo from '../assets/img/react.svg'
import { NavLink } from 'react-router-dom'

class Header extends Component {

  render () {
    return (
      <React.Fragment>
        <header id="header">
          <div className="center">
            {/* LOGO */ }
            <div id="logo">
                <img src={Logo} className="app-logo" alt="Logotipo" />
                <span id="brand">
                    <strong>Curso</strong>React
                </span>
            </div>

            {/* MENU */ }
            <nav id="menu">
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/form" activeClassName="active">Form</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" activeClassName="active">Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to="/test" activeClassName="active">Page 2</NavLink>
                    </li>
                </ul>
            </nav>
            {/* CLEAN FLOAT */ }
            <div className="clearfix"></div>
        </div>
      </header>
      </React.Fragment>
    );
  }
}


export default Header;
