import React from 'react';
import './Nav.css';
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        clicked: false
    }
  }

  render() {
    return (
        <nav>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/menu">Menu</a></li>
          </ul>
        </nav>
    );
  }
}
