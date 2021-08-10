import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import {fetchArticleByID, fetchArticles, fetchArticlesBySection} from '../api/ArticlesAPI'

class HomePage extends Component {
  state = {
    news: null
  }

  async componentDidMount() {
    try {
      const jsonResponse = await fetchArticles()
      this.setState({
        news: jsonResponse
      })
      console.log('news', news)
    } catch (error) {
      console.error('Error occurred fetching data: ', error);
    }
  }


  render() {
    return (
      <div>
        {this.state.news ? <ArticleList articles={this.state.news}
          handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID}`) } />
          : <span>Loading articles...</span> }
      </div>
    );
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
