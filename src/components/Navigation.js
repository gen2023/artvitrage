import React, { Fragment, Component } from "react";
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

export default class Navigation extends Component {
  static propTypes = {
    list: propTypes.array.isRequired,
  };
  state = { nameLang: "Ru" };

  editLang = (event) => {
    if (event) {
      if (event.target.alt === "lang_Ru") {
        return this.setState({ nameLang: "Ru" });
      } else if (event.target.alt === "lang_En") {
        return this.setState({ nameLang: "En" });
      }
    }
  };
  language() {}
  render() {
    const { nameLang } = this.state;
    //console.log({ nameLang });
    return (
      <Fragment>
        <header>
          <div>
            <img
              src="../image/language/ru.png"
              alt="lang_Ru"
              onClick={this.editLang}
            />
            <img
              src="../image/language/en.png"
              alt="lang_En"
              onClick={this.editLang}
            />
          </div>
          <nav>
            <ul>
              {this.props.list.map(({ id, headingRu, headingEn, link }) => (
                <NavigationItem
                  key={id}
                  name={nameLang === "Ru" ? headingRu : headingEn}
                  link={link}
                />
              ))}
            </ul>
          </nav>
        </header>
        <div className="header"></div>
        <Switch>
          {/* <Route path="/" exact component={HomePage} /> */}
          {/* <Route path="/About" component={AboutPage} /> */}
          {/* <Route path="/Vitraj" component={VitrajPage} /> */}
          {/* <Route path="/Contact" component={ContactPage} /> */}

          {/* <Route component={NotFoundPage} /> */}
          <Route
            path="/"
            exact
            render={(props) => <HomePage {...props} data={nameLang} />}
          />
          <Route
            path="/About"
            render={(props) => <AboutPage {...props} data={nameLang} />}
          />
          <Route
            path="/Vitraj"
            render={(props) => <VitrajPage {...props} data={nameLang} />}
          />

          <Route path="/Gallery" component={GalleryPage} />
          <Route path="/Video" component={VideoPage} />
          <Route path="/Videoblog" component={VideoblogPage} />
          <Route
            path="/Contact"
            render={(props) => <ContactPage {...props} data={nameLang} />}
          />
          <Route
            render={(props) => <NotFoundPage {...props} data={nameLang} />}
          />
        </Switch>
      </Fragment>
    );
  }
}
