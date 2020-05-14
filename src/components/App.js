import React, { Component } from "react";
import "../css/index.css";
import Navigation from "./Navigation";
import NavigationData from "../json/Navigation.json";

export default class App extends Component {
  // в рендер попадает првоначальное значение, но после нажатия по
  //выбору языка, в рендер непопадает значение. попробовать через state
  render() {
    return (
      <Navigation list={NavigationData} /> //editLang={this.editLang} lang={lang} />
    );
  }
}
