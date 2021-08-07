import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import {fetchArticleByID, fetchArticles, fetchArticlesBySection} from '../api/ArticlesAPI'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const SectionPage = ({history}) => {
  const {sectionValue} = useParams()
  const [filteredNews, setFilteredNews] = useState()
  
  useEffect( () => {
    const getFilteredNews = async () => {
      const jsonResponse = await fetchArticlesBySection(sectionValue)
      setFilteredNews(jsonResponse)
    }
    getFilteredNews()
  }, [sectionValue])


    if (!filteredNews){
      return <p>Loading...</p>
    }
    else {
      return (
        <div>
          <ArticleList articles={filteredNews}
            handleTitleClick={(articleID) => history.push(`/articles/${articleID}`) } />
        </div>
      );
    }
}

export default SectionPage;



