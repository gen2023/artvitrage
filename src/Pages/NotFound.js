import React,{Component} from 'react';
import {connect} from 'react-redux';

import NotFoundTextRu from "../json/ru/notFound.json";
import NotFoundTextEn from "../json/en/notFound.json";

class NotFound extends Component {
    funcLanguage() {
      const {language } = this.props;
  
    if (language==="Ru"){
      
      return NotFoundTextRu;
    }
    else
    {return NotFoundTextEn;}
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
const mapStateToProps=state=>{return {language: state.language}}

export default connect(mapStateToProps)(NotFound)