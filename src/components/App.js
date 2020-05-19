import React, { Component } from "react";
import "../css/index.css";
import Navigation from "./Navigation";
import NavigationData from "../json/Navigation.json";

export default class App extends Component {
  // задача6: при обновлении страницы переменная headeeng по умолчанию undefined а должна быть =языку
  render() {
    return <Navigation list={NavigationData} />;
  }
}
