import React,{Component} from 'react';
import {connect} from 'react-redux';

import '../css/pages/notFound.css';

import textPageRu from "../json/ru/notFound.json";
import textPageEn from "../json/en/notFound.json";

class NotFound extends Component {
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
    <div className="notFound">
      <h1 style={{ textAlign: "center" }}>
        {list.error} <span role="img" aria-label="emoji"></span>
      </h1>
    </div>
  );
};

};
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language.language}}

export default connect(mapStateToProps)(NotFound)