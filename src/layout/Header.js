import React, { Component } from 'react';
import '../styles/App.css'

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                <img src="../../globe.png" alt="Globe" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
