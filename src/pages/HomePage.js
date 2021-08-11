import React, { Component, useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import {fetchArticleByID, fetchArticles, fetchArticlesBySection} from '../api/ArticlesAPI'

// Functional solution:
function HomePage(props) {

  const [ news, setNews ] = useState([]);

  useEffect(async () => {
		const articles = await fetchArticles();
    setNews(articles);
	}, []);

  return (
    <div>
      <ArticleList articles={news}
        handleTitleClick={(articleID) => props.history.push(`/articles/${articleID}`)} />
    </div>
  );
}


export default HomePage;


// Class solution:
// class HomePage extends Component {
//   state = {
//     news: null
//   }

//   async componentDidMount() {
//     try {
//       const jsonResponse = await fetchArticles()
//       this.setState({
//         news: jsonResponse
//       })
//     } catch (error) {
//       console.error('Error occurred fetching data: ', error);
//     }
//   }

//   render() {
//     return (
//       <div>
//         {this.state.news ? <ArticleList articles={this.state.news}
//           handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID}`) } />
//           : <span>Loading articles...</span> }
//       </div>
//     );
//   }
// }
