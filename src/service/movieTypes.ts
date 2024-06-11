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

/** A single Movie */
export interface ASingleMovieResponse {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: null;
	budget: number;
	genres: Genre[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: {
		english_name: string;
	}[];
	tagline: string;
	title: string;
	credits: {
		cast: Cast[];
		crew: Crew[];
	}

  }

  interface Cast {
	id: number;
	name: string;
	profile_path: string;
	character: string;
  }

  interface Crew {

  }

  interface ProductionCompany {
	id: number;
	logo_path: string
	name: string;
	origin_country: string;
  }
