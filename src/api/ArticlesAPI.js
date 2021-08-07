const fetchArticleByID = async (articleID) => {
  let url = `http://localhost:3001/api/articles/${articleID}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchArticlesBySection = async (section) => {
  let sectionFilter = { where: { section: section } };
  let url = `http://localhost:3001/api/articles?filter=${JSON.stringify(
    sectionFilter
  )}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchArticles = async (filters = null) => {
  let url = "http://localhost:3001/api/articles";
  url += filters ? `?filter=${JSON.stringify(filters)}` : "";
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchArticleByID, fetchArticles, fetchArticlesBySection };
