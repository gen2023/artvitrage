import React from "react";
import AboutText from "../json/pages/about.json";

const About = (nameLang) => {
  let { heading } = AboutText.headingRu;
  console.log({ heading });
  if (nameLang.data === "Ru") {
    heading = AboutText.headingRu;
  } else {
    if (nameLang.data === "En") {
      heading = AboutText.headingEn;
    }
  }
  return <h1 style={{ textAlign: "center" }}>{heading}</h1>;
};
export default About;
