import React,{Component} from 'react';
import {connect} from 'react-redux';

import textPageRu from "../json/ru/vitraj.json";
import textPageEn from "../json/en/vitraj.json";

class Vitraj extends Component {
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
    <div className="vitrajBackground pageAbout ">
      <div className="content contentVitraj">
        <h1 style={{ textAlign: "center" }}>{list.heading}</h1>
        <div className="textVitraj">{list.text1}</div>
        <div className="textVitraj">{list.text2}</div>
        <div className="textVitraj">{list.text3}</div>
        <div className="textVitraj">{list.text4}</div>
        <div className="textVitraj">{list.text5}</div>
      </div>
    </div>
  );
};
};
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(Vitraj)