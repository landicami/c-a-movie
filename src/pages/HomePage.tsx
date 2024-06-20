import { Link, useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import useSearchMovies from "../hooks/useSearchMovies";
import MoviesCard from "../components/MoviesCard";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import ListGroup  from "react-bootstrap/ListGroup";

interface MovieObject {
	id: number;
	title: string;
  }

const HomePage = () => {
	const [searchParams, setSearchParams ] = useSearchParams();

	const searchParamsQuery = searchParams.get("query") || "";
	const pageParams = Number(searchParams.get("page")) || 1;


	const searchMovieBase = async (search: string) => {
		setSearchParams({ query: search.trim(), page: "1"})
	}

	const searchResponse = useSearchMovies(searchParamsQuery, pageParams)

	const [movieHistory, setMovieHistory] = useState<MovieObject[]>([]);

	useEffect(() => {
		const storedMovies = JSON.parse(localStorage.getItem('historyMovies') || '[]');
		setMovieHistory(storedMovies);
	  }, []);

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

		{movieHistory.length > 0 &&
		<>
			<h4>Movies you have visited:</h4>
			<div className="row">

			{movieHistory.map(movie =>
			<div className="col-8" key={movie.id}>
				<ListGroup>
						<ListGroup.Item><Link className="movie-link" to={"movies/" + movie.id}>{movie.title}</Link></ListGroup.Item>
				</ListGroup>
			</div>
			)
			}
		</div>
		</>
		}


	</div>


	</>
  );
};

export default HomePage;
