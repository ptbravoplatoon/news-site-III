const fetchArticleByID = async (articleID) => {
	try {
		const response = await fetch(`http://localhost:3001/api/articles/${articleID}`);
		const responseBody = await response.json();
		return responseBody;
	} catch (error) {
		throw new Error('Call failed');
	}
};

const fetchArticlesBySection = async (section) => {
	try {
		const response = await fetch(`http://localhost:3001/api/articles?filter={"where":{"section":"${section}"}}`);
		const responseBody = await response.json();
		return responseBody;
	} catch (error) {
		throw new Error('Call failed');
	}
};

const fetchArticles = async (filters = null) => {
	try {
		if (!filters) {
			const response = await fetch('http://localhost:3001/api/articles');
			const responseBody = await response.json();
			return responseBody;
		} else {
			const response = await fetch(`http://localhost:3001/api/articles?filter=${filters}`);
			const responseBody = await response.json();
			return responseBody;
		}
	} catch (error) {
		throw new Error('Call failed');
	}
};

export { fetchArticleByID, fetchArticles, fetchArticlesBySection };
