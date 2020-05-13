import React, { Component } from "react";
import "../css/index.css";
import Navigation from "./Navigation";
import NavigationData from "../json/Navigation.json";

let nameLang = "nameRu";
export default class App extends Component {
  editLang(event) {
    if (event) {
      console.log(event.target.alt);
      if (event.target.alt === "lang_Ru") {
        console.log(event.target.alt);
        nameLang = "nameRu";
      } else if (event.target.alt === "lang_En") {
        console.log(event.target.alt);
        nameLang = "nameEn";
      }
    }
    return nameLang;
  }
  // в рендер попадает првоначальное значение, но после нажатия по
  //выбору языка, в рендер непопадает значение. попробовать через state
  render() {
    const lang = this.editLang();
    console.log("lang");
    return (
      <Navigation list={NavigationData} editLang={this.editLang} lang={lang} />
    );
  }
}
