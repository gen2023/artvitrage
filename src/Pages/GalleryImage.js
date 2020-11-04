import React, { Component } from 'react';
import picture from '../json/pages/galleryImage.json'


export default class GalleryImage extends Component {

  
  render() {const listPicture=picture.filter(cat=>cat.category===this.props.match.params.galleryId);
    
    return (<><div> <br /> <br /> <br /> <br /> <br />
     <h1>{this.props.match.params.galleryId}</h1></div>
      <ul className="ImageGallery"> {listPicture.map(
                ({ small }) => (
                  <li className="ImageGalleryItem"> <img className="ImageGalleryItem-image" src={small} alt=""/>
                    </li>
                ),
              )}</ul>
</>
    );
  }
}
