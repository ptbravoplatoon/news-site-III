import React, { Component,useEffect } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';

import {API_URL} from '../api/api';
//import News from '../data/news.json';
import navItems from '../data/navItems.json';
import AppNav from '../components/AppNav/AppNav.js';
class HomePage extends Component {
  constructor(props) {
    super(props);
      this.state = {
        navItems: navItems,
        ///addind data to this variable
        News:[]
    }
    //method is binding with class line 8
    //component did mount and is working like useEffect
    this.fetchArticlesBySection = this.fetchArticlesBySection.bind(this);
  }
componentDidMount(){
  this.fetchArticlesBySection();
}
fetchArticlesBySection(){
      let data = this.state;
      fetch(API_URL+'articles') 
      //checking responee
      .then((response) => { 
        //if correct return respone
        return response.json();
      })
      .then((responseData) => { 
        //gettingr response and setting again in state
            data.News = responseData;
            //set state
            this.setState(data);
      })
      .catch((error) => {
        alert("Please check your API");
      })
   
    }
  render() {
    const { navItems } = this.state
    return (
      <div>
          {/*creating a new Nav menu and pushing new url to browser without page reload */}
        <AppNav navItems={navItems} handleNavClick={(clickedItem) => {this.props.history.push("/"+clickedItem)}} />
        {/* pushing new url to the browser  without page reload */}
        <ArticleList articles={this.state.News} handleTitleClick={(articleID) =>{this.props.history.push('/articles/'+articleID);} } />
      </div>
    );
  }
}

export default HomePage;
