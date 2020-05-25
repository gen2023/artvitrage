import React from "react";
import VitrajText from "../json/pages/vitraj.json";

const Vitraj = (nameLang) => {
  let heading = VitrajText.headingRu;
  let text1 = VitrajText.text1Ru;
  let text2 = VitrajText.text2Ru;
  let text3 = VitrajText.text3Ru;
  let text4 = VitrajText.text4Ru;
  let text5 = VitrajText.text5Ru;

  //console.log(AboutText.textRu);
  if (nameLang.data === "Ru") {
    heading = VitrajText.headingRu;
    text1 = VitrajText.text1Ru;
    text2 = VitrajText.text2Ru;
    text3 = VitrajText.text3Ru;
    text4 = VitrajText.text4Ru;
    text5 = VitrajText.text5Ru;
  } else {
    if (nameLang.data === "En") {
      heading = VitrajText.headingEn;
      text1 = VitrajText.text1En;
      text2 = VitrajText.text2En;
      text3 = VitrajText.text3En;
      text4 = VitrajText.text4En;
      text5 = VitrajText.text5En;
    }
  }
  return (
    <div className="vitrajBackground pageAbout ">
      <div className="content contentVitraj">
        <h1 style={{ textAlign: "center" }}>{heading}</h1>
        <div className="textVitraj">{text1}</div>
        <div className="textVitraj">{text2}</div>
        <div className="textVitraj">{text3}</div>
        <div className="textVitraj">{text4}</div>
        <div className="textVitraj">{text5}</div>
      </div>
    </div>
  );
};
export default Vitraj;
