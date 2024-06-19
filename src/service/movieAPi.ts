import axios from "axios";
import { ASingleMovieResponse, ActorMovieResponse, ActorResponse, GenreMovieResponse, GenreResponse, MoviesResponse } from "./movieTypes";

const BEARER = import.meta.env.VITE_MOVIE_BEARER_KEY

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
	timeout: 10000,
	headers: {
		"Accept": 'application/json',
		"Content-Type": "application/json",
		"Authorization": `Bearer ${BEARER}` ,
	}
})

const get = async <T>(endpoint: string) => {
	const res = await instance.get<T>(endpoint);
	return res.data;
}

/** Get now playing */
export const getNowPlayingMovies = async () => {
	const data = await get<MoviesResponse>("/movie/now_playing?include_adult=false&language=en-US&page=1");
	return data;
}

/** Get trending by week */
export const getNowTrendingMovies = async () => {
	const data = await get<MoviesResponse>("/trending/movie/week?include_adult=false&language=en-US&page=1");
	return data;
}

/** Get toprated movies */

export const getTopRatedMovies = async () => {
	const data = await get<MoviesResponse>("/movie/top_rated?include_adult=false&language=en-US&page=1");
	return data;
}

/** Get the genres */
export const getGenres = async () => {
	const data = await get<GenreResponse>("/genre/movie/list?&include_adult=false&language=en-US");
	return data;
}

/** Get movies from a specific genre  */
export const getMovieByGenre = async (genreId : number, page: number) => {
	const data = await get<GenreMovieResponse>(`/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`);
	return data;
}


/** Get a single movie for detailspage */
export const getASingleMovie = async (movieId: number) => {
	const data = await get<ASingleMovieResponse>(`/movie/${movieId}?append_to_response=credits&include_adult=false&language=en-US`);
	return data;
}

/** Get a single actor */
export const getActor = async (actorId: number) => {
	const data = await get<ActorResponse>(`/person/${actorId}?include_adult=false&language=en-US`);
	return data;
}

/** Get the moviecredits for actor */
export const getActorMovies = async (actorId: number) => {
	const data = await get<ActorMovieResponse>(`/person/${actorId}/movie_credits?&include_adult=false&language=en-US`);
	return data;
}

/** Search for movies */
export const searchMovies = async (query: string, page: number) => {
	const data = await get<MoviesResponse>(`search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`);
	return data;
}
