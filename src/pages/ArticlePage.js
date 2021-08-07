import React, { useEffect, useState } from 'react';
import Article from '../components/Article/Article.js';
import { fetchArticleByID } from '../api/ArticlesAPI';

function ArticlePage(props) {
	const [ articleID, setArticleID ] = useState(props.match.params.articleID);
	const [ article, setArticle ] = useState();
	const [ image, setImage ] = useState();

	useEffect(async () => {
		const a = await fetchArticleByID(articleID);
		setArticle(a);
		setImage(a.image ? a.image : null);
	}, []);

	return <div>{article ? <Article {...article} image={image} /> : <span>404: Article Not Found</span>}</div>;
}

export default ArticlePage;
