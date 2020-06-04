import React, { Component } from "react";
import "../css/reset.css";
import "../css/index.css";
import "../css/pages/about.css";
import "../css/pages/vitraj.css";
import "../css/pages/home.css";
import "../css/pages/contact.css";
import "../css/pages/notFound.css";
import Navigation from "./Navigation";
import NavigationData from "../json/Navigation.json";

export default class App extends Component {
  render() {
    return <Navigation list={NavigationData} />;
  }
}
//+задача4: в рендер попадает првоначальное значение, но после нажатия по
//+выбору языка, в рендер непопадает значение. попробовать через state
//+задача5: в рендер попадает првоначальное значение, но после нажатия по
//+выбору языка, в рендер непопадает значение. попробовать через state
//+задача6: при обновлении страницы переменная headeeng по умолчанию undefined а должна быть =языку

//задача7-8: верстка страниц
//задача отредактировать страницу контакты
//задача разобраться с выводом картинок для галлереи https://www.npmjs.com/package/react-image-gallery
//карусель https://www.npmjs.com/package/react-images
//задача разобратья с картинками npm install react-image --save
