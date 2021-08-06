import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import fetchAPI from '../api/ArticlesAPI.js'

// { fetchArticleByID, fetchArticles, fetchArticlesBySection }

class HomePage extends Component {

  state = {
    articles: null
  }

  async componentDidMount() {
    try {
      const jsonResponse = await fetchAPI.fetchArticles()
      this.setState({
        articles: jsonResponse
      })
    } catch (error) {
      console.error('Error occurred fetching data: ', error)
    }
  }

  render() {
    return (
      <div>
        { this.state.articles ? <ArticleList articles={this.state.articles}
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
