import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI.js';

class HomePage extends Component {
  state = {
    articles: null
  }

  async componentDidMount(){
    try{
      const articlesJson = await ArticlesAPI.fetchArticles();
      this.setState({
        articles: articlesJson
      })
    }
    catch(error){
      console.error('HomePage.componentDidMount: error fetching data.', error)
    }
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles}/>
      </div>
    );
  }
}

export default HomePage;
