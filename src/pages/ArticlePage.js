import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import {fetchArticleByID, fetchArticles, fetchArticlesBySection} from '../api/ArticlesAPI'

class ArticlePage extends Component {
  state = {
		article: null,
    image: null
	};

  async componentDidMount() {
    const articleID = this.props.match.params.articleID;
    try {
      const jsonResponse = await fetchArticleByID(articleID)
      this.setState({
        article: jsonResponse,
        image: jsonResponse.image
      })
    } catch (error) {
      console.error('Error occurred fetching data: ', error);
    }
  }
s
  render() {
    return (
      <div>
        {this.state.article ? <Article {...this.state.article } image={ this.state.image } /> :
          <span>Loading article...</span>
        }
      </div>
    );
  }
}

export default ArticlePage;


// Functional solution:
// function ArticlePage(props) {
//   const articleIndex = props.match.params.articleID - 1;
//   const article = News[articleIndex];
//   const image = article.multimedia.length ? article.multimedia[2].url : null;

//   return (
//     <div>
//       {article ? <Article { ...article } image={ image } /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
