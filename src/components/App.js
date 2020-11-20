import React, { Component } from 'react';

import '../../node_modules/modern-normalize/modern-normalize.css';

import '../css/index.css';
import '../css/mobileIndex.css';

import Navigation from './Navigation/Navigation';

export default class App extends Component {
  render() {
    return <Navigation />;
    
  }
}
