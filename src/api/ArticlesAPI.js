const fetchArticleByID = async (articleID) => {
  try {
    let response = await fetch(`http://localhost:3001/api/articles/${articleID}`)
    let data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
};

const fetchArticlesBySection = async (section) => {
  try {
    let response = await fetch(`http://localhost:3001/api/?filter={"section":{"${section}"}}`)
    let data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
};

const fetchArticles = async (filters = null) => {
  try {
    let response = null
    if (filters === null) {
      response = await fetch('http://localhost:3001/api/articles')
    } else {
      response = await fetch(`http://localhost:3001/api/articles?filter={"where":${filters}}`)
    }
    let data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
};

export {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection
};
