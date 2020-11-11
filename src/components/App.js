import React, { Component } from 'react';
import '../../node_modules/modern-normalize/modern-normalize.css';
import '../css/index.css';
import '../css/mobileIndex.css';
import '../css/pages/about.css';
import '../css/pages/mobileAbout.css';
import '../css/pages/vitraj.css';
import '../css/pages/mobilevitraj.css';
import '../css/pages/home.css';
import '../css/pages/mobileHome.css';
import '../css/pages/contact.css';
import '../css/pages/mobileContact.css';
import '../css/pages/notFound.css';
import '../css/pages/galleryImage.css';
import Navigation from './Navigation/Navigation';

export default class App extends Component {
  render() {
    return <Navigation />;
    
  }
}
