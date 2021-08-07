import React from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import ArticlesAPI from '../api/ArticlesAPI.js';

function HomePage(){
  const [articles, setArticles] = React.useState(null)

  React.useEffect(() => {
    const fetchArticlesAsync = async () =>{
      try{
        const articlesJson = await ArticlesAPI.fetchArticles();
        setArticles(articlesJson)
      }
      catch(error){
        console.error('HomePage.componentDidMount: error fetching data.', error)
      }
    };
    if(articles === null) { fetchArticlesAsync(); }
  }, [articles]);

  return(
    <div>
      <ArticleList articles={articles}/>
    </div>
  )
}

export default HomePage;
