import React,{Component} from 'react';
import {connect} from 'react-redux';

import homeTextRu from '../json/ru/home.json';
import homeTextEn from '../json/en/home.json';

class Home extends Component {
  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){
    
    return homeTextRu;
  }
  else
  {return homeTextEn;}
 }
 render() {
  const list=this.funcLanguage();
  return (
    <div className="homeBackground">
      <div className="content contentHome">
        <div className="contentHomeTitle">{list.title}</div>
        <div className="contentHomeAuthor">{list.author}</div>
      </div>
    </div>
  );
};
};
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language}}

export default connect(mapStateToProps)(Home)