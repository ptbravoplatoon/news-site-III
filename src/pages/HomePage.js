import React, { Component, useState, useEffect } from "react";
import ArticleList from "../components/ArticleList/ArticleList.js";
import { fetchArticles, fetchArticlesBySection } from "../api/ArticlesAPI.js";
import { useParams } from "react-router-dom";

// class HomePage extends Component {
//   render() {
//     return (
//       <div>
//         <ArticleList
//           articles={News}
//           handleTitleClick={(articleID) =>
//             this.props.history.push(`/articles/${articleID}`)
//           }
//         />
//       </div>
//     );
//   }
// }

function HomePage() {
  let { section } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (section) {
      async function getFilteredArticles() {
        const data = await fetchArticlesBySection(section);
        setArticles(data);
      }
      getFilteredArticles();
    } else {
      async function getArticles() {
        const data = await fetchArticles();
        setArticles(data);
      }
      getArticles();
    }
  }, [section]);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export default HomePage;
