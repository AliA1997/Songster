import React, { Component } from 'react';
import Auth from './components/Auth/Auth';
import Register from './components/Register/Register';
import routes from './routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
        </div>
        {routes}
      </div>
    );
  }
}

export default App;
