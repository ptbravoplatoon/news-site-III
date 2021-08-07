import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';
import {fetchArticleByID, fetchArticles, fetchArticlesBySection} from '../api/ArticlesAPI'

class HomePage extends Component {
  state = {
    news : null
  }

  async componentDidMount() {
    try {
      const jsonResponse = await fetchArticles()
      this.setState({
        news: jsonResponse
      });
    } catch (error) {
      console.error('Error occurred fetching data: ', error);
    }
  }


  render() {
    if (!this.state.news){
      return <p>Loading...</p>
    }
    else {
      return (
        <div>
          <ArticleList articles={this.state.news}
            handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID}`) } />
        </div>
      );
    }
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
