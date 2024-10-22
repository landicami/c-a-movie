import { Link } from "react-router-dom";
// import SearchForm from "../components/SearchForm";
// import useSearchMovies from "../hooks/useSearchMovies";
// import MoviesCard from "../components/MoviesCard";
// import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import ListGroup  from "react-bootstrap/ListGroup";

interface MovieObject {
	id: number;
	title: string;
  }

const HomePage = () => {



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
		{movieHistory.length > 0 &&
	<>
	<hr className="mt-5"/>
	<div className="col-8 mt-5">
			<h4>The latest ten movies you have visited earlier:</h4>
			<div className="row">

			{movieHistory.map(movie =>
			<div className="col-lg-4 col-sm-12 mt-2" key={movie.id}>
				<ListGroup>
						<ListGroup.Item><Link className="movie-link" to={"movies/" + movie.id}>{movie.title}</Link></ListGroup.Item>
				</ListGroup>
			</div>
			)
			}
		</div>
		</div>

		</>
		}



	</>
  );
};

export default HomePage;
