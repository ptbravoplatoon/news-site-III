import React, { Component, useState, useEffect } from "react";
import Article from "../components/Article/Article.js";
import { useParams } from "react-router-dom";
import { fetchArticleByID } from "../api/ArticlesAPI.js";

// class ArticlePage extends Component {
//   render() {
//     const articleIndex = this.props.match.params.articleID - 1;
//     const article = News[articleIndex];
//     const image = article.multimedia.length ? article.multimedia[2].url : null;

//     return (
//       <div>
//         {article ? <Article {...article } image={ image } /> :
//           <span>404: Article Not Found</span>
//         }
//       </div>
//     );
//   }
// }

function ArticlePage() {
  let { articleID } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    async function getArticle() {
      const data = await fetchArticleByID(articleID);
      setArticle(data);
    }
    getArticle();
  }, []);

  return (
    <div>
      {article ? <Article {...article} /> : <span>404: Article Not Found</span>}
    </div>
  );
}

export default ArticlePage;
