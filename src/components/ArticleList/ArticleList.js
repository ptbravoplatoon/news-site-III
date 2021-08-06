import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ArticleList extends Component {


  printArticles = () => {
    const { articles, handleTitleClick } = this.props;
    
    return articles.map((article) => {
      const articleKey = `article-${article.id}`
      return <ListGroupItem key={ articleKey }>
        <ArticleTeaser { ...article } handleTitleClick={handleTitleClick}/>
      </ListGroupItem>
    })
  }

  render() {
    
    return (
      <ListGroup>
        {this.printArticles()}
      </ListGroup>
    );
  }
}

export default ArticleList;


// Functional solution:
// function ArticleList({ articles, handleTitleClick }) {
//   return (
//     <ListGroup>
//       {articles.map((article, index) => (
//         <ListGroupItem>
//           <ArticleTeaser {...article} id={ index + 1 }
//              handleTitleClick={handleTitleClick} />
//         </ListGroupItem>
//       ))}
//     </ListGroup>
//   );
// }
