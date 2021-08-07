import Article from '../components/Article/Article'

async function fetchArticleByID(articleID){
  let response = await fetch(`http://localhost:3001/api/articles/${articleID}`);
  let data = await response.json();
  return data;
};

async function fetchArticlesBySection(section){
  let response = await fetch(`http://localhost:3001/api/articles?filter={"where":{"section":"${section}"}}`);
  let data = await response.json();
  return data;
};

async function fetchArticles(filters = null){
  let response;
  if(filters){
    response = await fetch(`http://localhost:3001/api/articles?filter=${filters}`);
  }
  else{
    response = await fetch(`http://localhost:3001/api/articles`);
  }
  let data = await response.json();
  return data;
};

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};
