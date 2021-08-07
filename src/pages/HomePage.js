import React from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';
import { useState, useEffect } from 'react';
import { fetchArticles } from '../api/ArticlesAPI';

function HomePage() {
	const [ articles, setArticles ] = useState([]);

	useEffect(async () => {
		const articleArr = await fetchArticles();
		setArticles(articleArr);
	}, []);

	return (
		<div>
			<ArticleList
				articles={articles}
				handleTitleClick={(articleID) => props.history.push(`/articles/${articleID}`)}
			/>
		</div>
	);
}

export default HomePage;
