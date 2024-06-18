/** Genres */
export interface Genre {
	id: number;
	name: string;
}

export interface GenreResponse {
	genres: Genre[];
}

export interface GenreMovieResponse {
	page: number;
	results: Movies[];
	total_pages: number;
	total_results: number;
}

/** General MovieResponse */
export interface MoviesResponse {
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
	vote_average: number;
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

 export interface Crew  {
	id: number;
	name: string;
	department: string;
	job: string;
}

  interface ProductionCompany {
	id: number;
	name: string;
  }

  /** An Actor */
  export interface ActorResponse {
	name: string;
	biography: string;
	birthday: string;
	deathday: string | null;
	gender: number;
	homepage: string | null;
	id: number;
	known_for_department: string;
	place_of_birth: string;
	profile_path: string;
  }

  /** a Movie from Actor */

  export interface ActorMovieResponse {
	cast: Movie[]
  }

  export interface Movie {
	genre_ids: number[];
	id: number,
	title: string;
	poster_path: string;
}
