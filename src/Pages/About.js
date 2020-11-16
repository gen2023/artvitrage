import React,{Component} from "react";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import textPageRu from "../json/ru/about.json";
import textPageEn from "../json/en/about.json";

class About extends Component {
  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){
    
    return textPageRu;
  }
  else
  {return textPageEn;}
 }
  render() {
    const list=this.funcLanguage();

  return (
    <div className="aboutBackground pageAbout ">
      <div className="content contentAbout">
        <h1 style={{ textAlign: "center" }}>{list.heading}</h1>
        <div className="textAbout">{list.text1}</div>
          <div>
            {list.text2}
            {list.text2}
            <Link to="my_photo">
              {list.linkMyPhoto}
            </Link>
            {list.text3}
            <Link to="work_photo">
              {list.linkPhotoWork}
            </Link>
            {list.text4}
          </div>
      </div>
    </div>
  );
};
};

//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(About)
