import React,{Component} from "react";
import {connect} from 'react-redux';

import AboutTextRu from "../json/ru/about.json";
import AboutTextEn from "../json/en/about.json";

class About extends Component {
  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){
    
    return AboutTextRu;
  }
  else
  {return AboutTextEn;}
 }
  render() {
    const list=this.funcLanguage();

  return (
    <div className="aboutBackground pageAbout ">
      <div className="content contentAbout">
        <h1 style={{ textAlign: "center" }}>{list.heading}</h1>
        <div className="textAbout">{list.text1}</div>
        <div>{list.text2}</div>
      </div>
    </div>
  );
};
};

//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language}}

export default connect(mapStateToProps)(About)
