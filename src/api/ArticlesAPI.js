const fetchArticleByID = async (articleID) => {
  try {
    let response = await fetch(`http://localhost:3001/api/articles/${articleID}`)
    let data = await response.json()
    return data
  } catch (error) {
    console.error('Something went wrong: ', error)
  }
};

const fetchArticlesBySection = async (section) => {
  try {
    let response = await fetch(`http://localhost:3001/api/articles?filter={"where":{"section":${section}}}`)
    let data = await response.json()
    return data
  } catch (error) {
    console.error('Something went wrong: ', error)
  }
};

const fetchArticles = async (filters = null) => {
  try {
    let response = null
    if (!filters) {
      response = await fetch(`http://localhost:3001/api/articles`)
    } else {
      response = await fetch(`http://localhost:3001/api/articles?filter={"where":${filters}}`)
    }
    let data = await response.json()
    return data
  } catch (error) {
    console.error('Something went wrong: ', error)
  }
};

export default {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};
