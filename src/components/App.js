import React, { Component } from 'react';
import '../../node_modules/modern-normalize/modern-normalize.css';
import '../css/index.css';
import '../css/mobile.css';
import '../css/pages/about.css';
import '../css/pages/vitraj.css';
import '../css/pages/home.css';
import '../css/pages/contact.css';
import '../css/pages/notFound.css';
import Navigation from './Navigation/Navigation';
import NavigationData from '../json/Navigation.json';

export default class App extends Component {
  render() {
    return <Navigation list={NavigationData} />;
  }
}
