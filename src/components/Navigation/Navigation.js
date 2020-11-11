import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import propTypes from 'prop-types';
import {connect} from 'react-redux';

import routes from '../../services/routes';
import * as actions from '../../services/redux/action';

import LangRu from '../../image/language/ru.png';
import LangEn from '../../image/language/en.png';
import NavigationItem from './NavigationItem';
import HomePage from '../../Pages/Home';
import AboutPage from '../../Pages/About';
import VitrajPage from '../../Pages/Vitraj';
import GalleryPage from '../../Pages/Gallery';
import VideoPage from '../../Pages/Video';
import VideoblogPage from '../../Pages/Videoblog';
import ContactPage from '../../Pages/Contact';
import NotFoundPage from '../../Pages/NotFound';
import GalleryImage from '../../Pages/GalleryImage';

import NavigationRu from '../../json/ru/navigation.json';
import NavigationEn from '../../json/en/navigation.json';


// import { saveToLS, getFromLS } from '../../services/localStorage';
import './Navigation.css';

class Navigation extends Component {
  // static propTypes = {
  //   list: propTypes.array.isRequired,
  // };
  // state = { nameLang: 'Ru' };

  // componentDidMount() {
  //   this.setState({ nameLang: getFromLS('nameLang') });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextNameLang = this.state.nameLang;
  //   const prevNameLang = prevState.nameLang;

  //   if (nextNameLang !== prevNameLang) {
  //     saveToLS('nameLang', nextNameLang);
  //   }
  // }

  // editLang = event => {
  //   if (event) {
  //     if (event.target.alt === 'lang_Ru') {
  //       return this.setState({ nameLang: 'Ru' });
  //     } else if (event.target.alt === 'lang_En') {
  //       return this.setState({ nameLang: 'En' });
  //     }
  //   }
  // };
  funcLanguage() {
    const {language } = this.props;

  if (language==="Ru"){
    
    return NavigationRu;
  }
  else
  {return NavigationEn;}
 }
  render() {
    const { languageRu,languageEn } = this.props;
    const list=this.funcLanguage();

    return (
      <Fragment>
        <header>
          <div className="languageContent">
            <div className="languageList">
              <img src={LangRu} alt="lang_Ru" onClick={languageRu} />
            </div>
            <div className="languageList">
              <img src={LangEn} alt="lang_En" onClick={languageEn} />
            </div>
          </div>
          <nav className="listHeader">
            <ul>
              {list.map(
                ({ id, heading, link, classNameStyle }) => (
                  <NavigationItem
                    key={id}
                    name={heading}
                    link={link}
                    classNameStyle={classNameStyle}
                  />
                ),
              )}
            </ul>
          </nav>
        </header>
        
        <Switch>

          <Route
            path={routes.home}
            exact
            render={props => <HomePage {...props} />}
            // render={props => <HomePage {...props} data={nameLang} />}
          />
          <Route
            path={routes.about}
            render={props => <AboutPage {...props} />}
            // render={props => <AboutPage {...props} data={nameLang} />}
          />
          <Route
            path={routes.vitraj}
            render={props => <VitrajPage {...props} />}
            // render={props => <VitrajPage {...props} data={nameLang} />}
          />
          <Route
            path={routes.gallery}
            exact
            render={props => <GalleryPage {...props} />}
            // render={props => <GalleryPage {...props} data={nameLang} />}
          />
          <Route path={routes.galleryCategoria} component={GalleryImage} />
          <Route path={routes.video} component={VideoPage} />
          <Route path={routes.videoblog} component={VideoblogPage} />
          <Route
            path={routes.contact}
            render={props => <ContactPage {...props} />}
            // render={props => <ContactPage {...props} data={nameLang} />}
          />
          <Route
          render={props => <NotFoundPage {...props} />}
            // render={props => <NotFoundPage {...props} data={nameLang} />}
          />
        </Switch>
      </Fragment>
    );
  }
}
//получение языка в пропах
const mapStateToProps=state=>{return {language: state.language}}
//отправляем пропы с языком
const mapDispatchToProps=dispatch=>{return{
  languageRu:()=>dispatch(actions.languageRu('Ru')),
languageEn:()=>dispatch(actions.languageEn('En'))}}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)