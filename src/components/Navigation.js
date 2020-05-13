import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import propTypes from "prop-types";
import NavigationItem from "./NavigationItem";
import HomePage from "../Pages/Home";
import AboutPage from "../Pages/About";
import VitrajPage from "../Pages/Vitraj";
import GalleryPage from "../Pages/Gallery";
import VideoPage from "../Pages/Video";
import VideoblogPage from "../Pages/Videoblog";
import ContactPage from "../Pages/Contact";
import NotFoundPage from "../Pages/NotFound";

function Navigation({ list, editLang, lang }) {
  return (
    <Fragment>
      <header>
        <div>
          <img
            src="../image/language/ru.png"
            alt="lang_Ru"
            onClick={editLang}
          />
          <img
            src="../image/language/en.png"
            alt="lang_En"
            onClick={editLang}
          />
        </div>
        <nav>
          <ul>
            {list.map(({ id, nameRu, nameEn, link }) => (
              <NavigationItem
                key={id}
                name={lang === "nameRu" ? nameRu : nameEn}
                link={link}
              />
            ))}
          </ul>
        </nav>
      </header>
      <div className="header"></div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/About" component={AboutPage} />
        <Route path="/Vitraj" component={VitrajPage} />
        <Route path="/Gallery" component={GalleryPage} />
        <Route path="/Video" component={VideoPage} />
        <Route path="/Videoblog" component={VideoblogPage} />
        <Route path="/Contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Fragment>
  );
}
Navigation.propTypes = {
  contacts: propTypes.oneOfType([
    propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
      })
    ),
    propTypes.array,
  ]),
};

export default Navigation;
