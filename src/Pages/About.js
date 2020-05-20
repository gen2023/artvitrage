import React from "react";
import AboutText from "../json/pages/about.json";

const About = (nameLang) => {
  let heading = AboutText.headingRu;
  let text1 = AboutText.text1Ru;
  let text2 = AboutText.text2Ru;
  //console.log(AboutText.textRu);
  if (nameLang.data === "Ru") {
    heading = AboutText.headingRu;
    text1 = AboutText.text1Ru;
    text2 = AboutText.text2Ru;
  } else {
    if (nameLang.data === "En") {
      heading = AboutText.headingEn;
      text1 = AboutText.text1En;
      text2 = AboutText.text2En;
    }
  }
  return (
    <div className="aboutBackground pageAbout ">
      <div className="content contentAbout">
        <h1 style={{ textAlign: "center" }}>{heading}</h1>
        <div className="textAbout">{text1}</div>
        <div>{text2}</div>
      </div>
    </div>
  );
};
export default About;
