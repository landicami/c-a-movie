/** Genres */
export interface Genre {
	id: number;
	name: string;
}

export interface GenreResponse {
	genres: Genre[];
}

/** Now playing */
export interface NowPlayingResponse {
	results: Movies[]
}

export interface Movies {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overwiew: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
