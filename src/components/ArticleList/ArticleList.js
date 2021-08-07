import React from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ArticleList = (props) => {

  const printArticles = () => {
    const { articles } = props;
    
    return articles.map((article) => {
      const articleKey = `article-${article.id}`
      return <ListGroupItem key={ articleKey }>
        <ArticleTeaser { ...article } />
      </ListGroupItem>
    })
  }

  return (
    <ListGroup>
      {printArticles()}
    </ListGroup>
  );
};

export default ArticleList;
