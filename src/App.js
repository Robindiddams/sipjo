import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  AppWrapper,
} from './components';
import Home from './pages/Home';
import Test from './pages/Test';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
        <Route path="/" exact component={Home} />
        <Route path="/test/" component={Test} />
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
