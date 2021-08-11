import React, { Component, useEffect, useState } from 'react';
import Article from '../components/Article/Article.js'
import {fetchArticleByID, fetchArticles, fetchArticlesBySection} from '../api/ArticlesAPI'


// Functional solution:
function ArticlePage(props) {
	const [ articleID, setArticleID ] = useState(props.match.params.articleID);
	const [ article, setArticle ] = useState(null);
	const [ image, setImage ] = useState(null);

  useEffect(async () => {
    const jsonResponse = await fetchArticleByID(articleID);
    setArticle(jsonResponse);
    setImage(jsonResponse.image)
  }, []);


  return (
    <div>
      {article ? <Article {...article } image={ image } /> :
        <span>Loading article...</span>
      }
    </div>
  );
}

export default ArticlePage;


// class ArticlePage extends Component {
//   state = {
// 		article: null,
//     image: null
// 	};

//   async componentDidMount() {
//     const articleID = this.props.match.params.articleID;
//     try {
//       const jsonResponse = await fetchArticleByID(articleID)
//       this.setState({
//         article: jsonResponse,
//         image: jsonResponse.image
//       })
//     } catch (error) {
//       console.error('Error occurred fetching data: ', error);
//     }
//   }
// s
//   render() {
//     return (
//       <div>
//         {this.state.article ? <Article {...this.state.article } image={ this.state.image } /> :
//           <span>Loading article...</span>
//         }
//       </div>
//     );
//   }
// }
