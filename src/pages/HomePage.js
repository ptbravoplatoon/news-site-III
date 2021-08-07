import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';
import { fetchArticles } from '../api/ArticlesAPI';

class HomePage extends Component {
	state = {
		articles: []
	};

	async componentDidMount() {
		const articleArr = await fetchArticles();
		this.setState({
			articles: articleArr
		});
	}

	render() {
		const { articles } = this.state;
		return (
			<div>
				<ArticleList articles={articles} />
			</div>
		);
	}
}

export default HomePage;

// Functional solution:
// function HomePage() {
//   return (
//     <div>
//       <ArticleList articles={News}
//         handleTitleClick={(articleID) => props.history.push(`/articles/${articleID}`)} />
//     </div>
//   );
// }
