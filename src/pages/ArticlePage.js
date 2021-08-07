import React from 'react';
import Article from '../components/Article/Article.js'
import ArticlesAPI from '../api/ArticlesAPI.js';

function ArticlePage(props){
  const [article, setArticle] = React.useState(null)

  React.useEffect(() =>{
    const fetchArticleAsync = async () =>{
      try{
        const id = props.match.params.articleID;
        const articleJson = await ArticlesAPI.fetchArticleByID(id);
        setArticle(articleJson)
      }
      catch(error){
        console.error('HomePage.componentDidMount: error fetching data.', error)
      }
    }
    if(article === null) { fetchArticleAsync() }
  }, [article])

  return (
    <div>
      <div>Article Page</div>
      {article && <Article {...article}/>}
    </div>
  )
}

export default ArticlePage;
