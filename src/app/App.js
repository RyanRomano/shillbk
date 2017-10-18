import React from 'react';
import Nav from '../components/Nav/Nav';
import Main from '../containers/Main/Main';

export default class App extends React.Component {
  render() {
    return (
        <div className="appContainer">
          <Nav/>
          <Main/>
        </div>
    );
  }
}

