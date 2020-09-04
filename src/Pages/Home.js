import React from 'react';
import homeText from '../json/pages/home.json';

const Home = nameLang => {
  let title = homeText.titleRu;
  let author = homeText.authorRu;

  if (nameLang.data === 'Ru') {
    title = homeText.titleRu;
    author = homeText.authorRu;
  } else {
    if (nameLang.data === 'En') {
      title = homeText.titleEn;
      author = homeText.authorEn;
    }
  }
  return (
    <div className="homeBackground">
      <div className="content contentHome">
        <div className="contentHomeTitle">{title}</div>
        <div className="contentHomeAuthor">{author}</div>
      </div>
    </div>
  );
};
export default Home;
