import React, { Component } from 'react';
import Article from '../components/Article/Article.js';
import { fetchArticleByID } from '../api/ArticlesAPI';

class ArticlePage extends Component {
	state = {
		articleID: this.props.match.params.articleID,
		article: null
	};

	async componentDidMount() {
		const { articleID } = this.state;
		const a = await fetchArticleByID(articleID);
		this.setState({
			article: a
		});
	}

	render() {
		const { article } = this.state;
		return <div>{article ? <Article {...article} /> : <span>404: Article Not Found</span>}</div>;
	}
}

export default ArticlePage;

// Functional solution:
// function ArticlePage(props) {
//   const articleIndex = props.match.params.articleID - 1;
//   const article = News[articleIndex];
//   const image = article.multimedia.length ? article.multimedia[2].url : null;

//   return (
//     <div>
//       {article ? <Article { ...article } image={ image } /> :
//         <span>404: Article Not Found</span>
//       }
//     </div>
//   );
// }
