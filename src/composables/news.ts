const useNews = () => {
	const fetchNews = async () => {
		console.debug("!!!!");
		return await useFetch("https://newsapi.org/v2/everything?q=apple&from=2022-11-13&to=2022-11-13&sortBy=popularity&apiKey=API_KEY");
	};

	return { fetchNews };
};

export default useNews;
