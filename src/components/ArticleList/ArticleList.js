import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
class ArticleList extends Component {
  render() {
    const {articles,handleTitleClick} = this.props;
    return (
      <>
            {articles.map((obj,index)=>(
          <ArticleTeaser 
          key={index}
            id={index} 
            title = {obj.title}
            created_date = {obj.created_date}
            handleTitleClick = {handleTitleClick}
            />
      ))}
    
      </>
    );
  }
}

export default ArticleList;
