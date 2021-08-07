const fetchArticleByID = async (articleID) => {
  let response =  await fetch(`http://localhost:3001/api/articles/${articleID}`)
  let data = await response.json()
  return data
};

const fetchArticlesBySection = async (section) => {

  let response = await fetch(`http://localhost:3001/api/articles?filter={"where":{"section":"${section}"}}`)
  let data = await response.json()
  return data
};

const fetchArticles = async (filters = null) => {
  if (filters) {
    let response = await fetch(`http://localhost:3001/api/articles?filter={"where":${filters}}`)
    let data = await response.json()
    return data
  } else {
    let response = await fetch(`http://localhost:3001/api/articles`)
    let data = await response.json()
    return data
  }
};

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};
