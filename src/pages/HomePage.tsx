import { Link, useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import useSearchMovies from "../hooks/useSearchMovies";
import MoviesCard from "../components/MoviesCard";
import Pagination from "../components/Pagination";
import useAMovie from "../hooks/useAMovie";
import Card from 'react-bootstrap/Card';


const HomePage = () => {
	const [searchParams, setSearchParams ] = useSearchParams();

	const searchParamsQuery = searchParams.get("query") || "";
	const pageParams = Number(searchParams.get("page")) || 1;


	const searchMovieBase = async (search: string) => {
		setSearchParams({ query: search.trim(), page: "1"})
	}

	const searchResponse = useSearchMovies(searchParamsQuery, pageParams)

	const movie = localStorage.getItem("historyMovies") || "";
	const showLastMovie = movie ? JSON.parse(movie) : "";

	const latestMovie = useAMovie(showLastMovie);

  return (
    <>
	<div className="d-flex justify-content-center">
		<div className="text-center">
			<div className="p-4 border rounded mb-2 col-lg-12 col-sm-12 cinema-short mb-4">
			<h2 className="text-center">Find ze code for your favorite movie</h2>
				<Link to={"/nowplaying"} className='btn btn-secondary m-1' role='button'>Now playing</Link>
				<Link to={"/trending"} className='btn btn-secondary m-1' role='button'>Trending</Link>
				<Link to={"/toprated"} className='btn btn-secondary m-1' role='button'>Top Rated</Link>
				<Link to={"/genres"} className='btn btn-secondary m-1' role='button'>By genre</Link>
			</div>
		</div>
	</div>
	<h2 className="text-center">Or search for any movie you like!</h2>

	<SearchForm
	onSearchMovie={searchMovieBase}
	/>

	{searchResponse.data &&
		<Pagination
		totalpages={searchResponse.data.total_pages > 500 ? 500 : searchResponse.data.total_pages}
		page={pageParams}
		hasNextPage={pageParams === searchResponse.data.total_pages}
		hasPreviousPage={pageParams === 1 }
		onNextPage={() => setSearchParams({page: (pageParams + 1).toString(), query: searchParamsQuery } )}
		onPreviousPage={() => setSearchParams({page: (pageParams - 1).toString(), query: searchParamsQuery })}
		/>
	}

	<div className="row">
		{searchResponse.data && <>
		<p>You searched for "{searchParamsQuery}" and got {searchResponse.data.total_results} hits.</p>

			<MoviesCard
			data={searchResponse.data.results}
			/>
		</>
		}

		{searchResponse.data?.results.length === 0 &&
			<p>
				No movies on that search, try againg!
			</p>
		}

		{latestMovie.data &&
		<>
			<h4>Movies you have visited:</h4>
			<div className="col-4">

			<Card>
				<Card.Body>
					<Card.Title>
						<Link className="movie-link" to={"movies/" + latestMovie.data.id}>{latestMovie.data.title}</Link>
					</Card.Title>
				</Card.Body>
			</Card>
		</div>
		</>
		}


	</div>


	</>
  );
};

export default HomePage;
