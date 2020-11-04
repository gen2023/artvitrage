import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import propTypes from 'prop-types';

import routes from '../../services/routes';

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
import GalleryImage from '../../Pages/GalleryImage'


import { saveToLS, getFromLS } from '../../services/localStorage';
import './Navigation.css';

export default class Navigation extends Component {
  static propTypes = {
    list: propTypes.array.isRequired,
  };
  state = { nameLang: 'Ru' };

  componentDidMount() {
    this.setState({ nameLang: getFromLS('nameLang') });
  }

  componentDidUpdate(prevProps, prevState) {
    const nextNameLang = this.state.nameLang;
    const prevNameLang = prevState.nameLang;

    if (nextNameLang !== prevNameLang) {
      saveToLS('nameLang', nextNameLang);
    }
  }

  editLang = event => {
    if (event) {
      if (event.target.alt === 'lang_Ru') {
        return this.setState({ nameLang: 'Ru' });
      } else if (event.target.alt === 'lang_En') {
        return this.setState({ nameLang: 'En' });
      }
    }
  };
  language() {}
  render() {
    const { nameLang } = this.state;
    console.log({ nameLang });
    return (
      <Fragment>
        <header>
          <div className="languageContent">
            <div className="languageList">
              <img src={LangRu} alt="lang_Ru" onClick={this.editLang} />
            </div>
            <div className="languageList">
              <img src={LangEn} alt="lang_En" onClick={this.editLang} />
            </div>
          </div>
          <nav className="listHeader">
            <ul>
              {this.props.list.map(
                ({ id, headingRu, headingEn, link, classNameStyle }) => (
                  <NavigationItem
                    key={id}
                    name={nameLang === 'Ru' ? headingRu : headingEn}
                    link={link}
                    classNameStyle={classNameStyle}
                  />
                ),
              )}
            </ul>
          </nav>
        </header>
        {/* <div className="header"></div> */}
        <Switch>

          <Route
            path={routes.home}
            exact
            render={props => <HomePage {...props} data={nameLang} />}
          />
          <Route
            path={routes.about}
            render={props => <AboutPage {...props} data={nameLang} />}
          />
          <Route
            path={routes.vitraj}
            render={props => <VitrajPage {...props} data={nameLang} />}
          />
          <Route
            path={routes.gallery}
            exact
            render={props => <GalleryPage {...props} data={nameLang} />}
          />
          <Route path={routes.galleryCategoria} component={GalleryImage} />
          <Route path={routes.video} component={VideoPage} />
          <Route path={routes.videoblog} component={VideoblogPage} />
          <Route
            path={routes.contact}
            render={props => <ContactPage {...props} data={nameLang} />}
          />
          <Route
            render={props => <NotFoundPage {...props} data={nameLang} />}
          />
        </Switch>
      </Fragment>
    );
  }
}
