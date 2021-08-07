import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';
import {fetchArticleByID, fetchArticles, fetchArticlesBySection} from '../api/ArticlesAPI'
import { useState, useEffect } from 'react';

const HomePage = ({history}) => {
  const [news, setNews] = useState()
  
  useEffect( () => {
    const getNews = async () => {
      const jsonResponse = await fetchArticles()
      setNews(jsonResponse)
    }
    getNews()
  }, [])


    if (!news){
      return <p>Loading...</p>
    }
    else {
      return (
        <div>
          <ArticleList articles={news}
            handleTitleClick={(articleID) => history.push(`/articles/${articleID}`) } />
        </div>
      );
    }
}

export default HomePage;


// Functional solution:
// function HomePage() {
//   return (
//     <div>
//       <ArticleList articles={News}
//         handleTitleClick={(articleID) => props.history.push(`/articles/${articleID}`)} />
//     </div>
//   );
// }
