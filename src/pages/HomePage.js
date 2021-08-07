import React, { useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import fetchAPI from '../api/ArticlesAPI.js'

// { fetchArticleByID, fetchArticles, fetchArticlesBySection }

const HomePage = (props) => {

  const [articles, setArticles] = useState(null)

  useEffect( () => {
    const fetchDataAsync = async () => {
      try {
        const jsonResponse = await fetchAPI.fetchArticles()
        setArticles(jsonResponse)
      } catch (error) {
        console.error('Error occurred fetching data: ', error)
      }
    }
    if (!articles) {
      fetchDataAsync()
    }
  }, [articles])

  return (
    <div>
      { articles ? <ArticleList articles={articles} /> : <span>Loading articles...</span> }
    </div>
  );
};

export default HomePage;
