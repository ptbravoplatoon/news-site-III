import React, { useState, useEffect } from 'react';
import Article from '../components/Article/Article.js'
import fetchAPI from '../api/ArticlesAPI.js'

const ArticlePage = (props) => {

  const [article, setArticle] = useState(null)
  const [image, setImage] = useState(null)

  useEffect( () => {
    const fetchDataAsync = async () => {
      const articleIndex = props.match.params.articleID;
      try {
        const jsonResponse = await fetchAPI.fetchArticleByID(articleIndex)
        setArticle(jsonResponse)
        setImage(jsonResponse.image)
      } catch (error) {
        console.error('Error occurred fetching data: ', error)
      }
    }
    if (!article) {
      fetchDataAsync()
    }
  }, [article])

  return (
    <div>
      {article ? <Article {...article } image={ image } /> : <span>Loading article...</span>}
    </div>
  );
};

export default ArticlePage;
