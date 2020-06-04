import React from "react";
import GalleryText from "../json/pages/gallery.json";

const Contact = (nameLang) => {
  let heading = GalleryText.headingRu;
  let text = GalleryText.textRu;

  if (nameLang.data === "Ru") {
    heading = GalleryText.headingRu;
    text = GalleryText.textRu;
  } else {
    if (nameLang.data === "En") {
      heading = GalleryText.headingEn;
      text = GalleryText.textEn;
    }
  }
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center" }}>{heading}</h1>
        <div className="textAbout">{text}</div>
      </div>
    </div>
  );
};
export default Contact;
