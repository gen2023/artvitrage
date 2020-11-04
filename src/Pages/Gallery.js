import React, {Component} from "react";
import GalleryNavigation from '../components/GalleryNavigation/GalleryNavigation';
// import '../components/ImageGallery/imageGallery.css';
import GalleryNavigationData from '../json/pages/GalleryNavigation.json'
export default class App extends Component {
  render() {
    return <GalleryNavigation list={GalleryNavigationData} />;
  }
}