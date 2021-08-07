import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
//import News from '../data/news.json';
//called api path from api component and this generates the article
import { API_URL } from '../api/api.js';
import navItems from '../data/navItems.json';
import AppNav from '../components/AppNav/AppNav.js';
class ArticlePage extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      navItems: navItems,

      article: {}
    }
    //2nd //this function is binding article to the class Article Page
    this.fetchArticleByID = this.fetchArticleByID.bind(this);
  }
  //3rd call component did mount which is similar to useEffect
  componentDidMount(){
    const index = this.props.match.params.articleID;
      this.fetchArticleByID(index);
  }
  fetchArticleByID(id){
    let data = this.state;
    //4th//get single article from this URL
    fetch(API_URL+'articles/'+id) 
    //checking responee
    .then((response) => { 
      //if correct return respone
      return response.json();
    })
    .then((responseData) => { 
      //gettingr response and setting again in state
          data.article = responseData;
          //set state
          this.setState(data);
    })
    .catch((error) => {
      alert("Please check your API");
    })
  }
    render() {
      const { navItems } = this.state
      return (<>
      <AppNav navItems={navItems} handleNavClick={(clickedItem) => {this.props.history.push("/"+clickedItem)}} />
      <div>Article Page</div>
      {/* printing a single article */}
      <Article 
        title ={this.state.article.title}
        created_date = {this.state.article.created_date}
        abstract = {this.state.article.abstract}
        byline={this.state.article.byline}
        image ={this.state.article.image}
      />

      </>
    );
  }
}

export default ArticlePage;
