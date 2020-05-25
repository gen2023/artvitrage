import React from "react";
import NotFoundText from "../json/pages/notFound.json";

const NotFound = (nameLang) => {
  let error = NotFoundText.errorRu;

  if (nameLang.data === "Ru") {
    error = NotFoundText.errorRu;
  } else {
    if (nameLang.data === "En") {
      error = NotFoundText.errorEn;
    }
  }
  return (
    <div className="notFound">
      <h1 style={{ textAlign: "center" }}>
        {error} <span role="img" aria-label="emoji"></span>
      </h1>
    </div>
  );
};
export default NotFound;
