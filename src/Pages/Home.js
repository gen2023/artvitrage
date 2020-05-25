import React from "react";
import homeText from "../json/pages/home.json";

const Home = (nameLang) => {
  let title = homeText.titleRu;
  let autor = homeText.autorRu;

  if (nameLang.data === "Ru") {
    title = homeText.titleRu;
    autor = homeText.autorRu;
  } else {
    if (nameLang.data === "En") {
      title = homeText.titleEn;
      autor = homeText.autorEn;
    }
  }
  return (
    <div className="homeBackground">
      <div className="content contentHome">
        <div>{title}</div>
        <div>{autor}</div>
      </div>
    </div>
  );
};
export default Home;
