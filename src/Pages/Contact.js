import React from "react";
import ContactText from "../json/pages/contact.json";

const Contact = (nameLang) => {
  let heading = ContactText.headingRu;
  let text1 = ContactText.text1Ru;
  let text2 = ContactText.text2Ru;
  let text3 = ContactText.text3Ru;
  let text4 = ContactText.text4Ru;
  let tel1 = ContactText.tel1;
  let tel2 = ContactText.tel2;
  let email = ContactText.email;
  if (nameLang.data === "Ru") {
    heading = ContactText.headingRu;
    text1 = ContactText.text1Ru;
    text2 = ContactText.text2Ru;
    text3 = ContactText.text3Ru;
    text4 = ContactText.text4Ru;
  } else {
    if (nameLang.data === "En") {
      heading = ContactText.headingEn;
      text1 = ContactText.text1En;
      text2 = ContactText.text2En;
      text3 = ContactText.text3En;
      text4 = ContactText.text4En;
    }
  }
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>{heading}</h1>
        <div className="textAbout">{text1}</div>
        <div className="textAbout">
          <a href="https://www.facebook.com/artvitrag2100/">{text2}</a>
        </div>
        <div className="textAbout">{text3}</div>
        <div className="textAbout">{text4}</div>
        <div className="textAbout">{tel1}</div>
        <div className="textAbout">{tel2}</div>
        <div className="textAbout">{email}</div>
      </div>
    </div>
  );
};
export default Contact;
