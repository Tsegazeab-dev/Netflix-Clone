const API_KEY = process.env.REACT_APP_API_KEY

const request = {
fetchNetflix: `/discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213&with_type=0&sort_by=first_air_date.asc`,
fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchAction : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;