import { useParams } from 'react-router-dom'
import DetailsCard from '../components/DetailsCard';
import useAMovie from '../hooks/useAMovie';
import MoviesCard from '../components/MoviesCard';
import useSimilar from '../hooks/useSimilar';
import { useEffect } from 'react';

interface MovieObject {
	id: number;
	title: string;
}

const MovieDetailsPage = () => {
	const {id} = useParams();
	const movieId = Number(id);

	const aSingleMovie = useAMovie(movieId);

	const similarMovies = useSimilar(movieId);


	const updateLocalStorage = (newMovie: MovieObject) => {
		const storedMovies = JSON.parse(localStorage.getItem('historyMovies') || '[]');

		const movieExists = storedMovies.find((movie: MovieObject) => movie.id === newMovie.id);

		if (!movieExists) {
			const updatedMovies = [newMovie, ...storedMovies];

			if (updatedMovies.length > 10) {
				updatedMovies.pop();
			}
		localStorage.setItem('historyMovies', JSON.stringify(updatedMovies));
    	}
	}

	useEffect(() => {
    if (aSingleMovie.data) {
		const newMovie: MovieObject = {
			id: aSingleMovie.data.id,
			title: aSingleMovie.data.title,
      };
		updateLocalStorage(newMovie);
    }
  }, [aSingleMovie.data]);

	return (
		<div className='p-2 mb-2 row '>

		{aSingleMovie.isError && <h2>Ops! An error occured: {aSingleMovie.error.message}</h2>}

			{aSingleMovie.data &&
				<DetailsCard
				data={aSingleMovie.data}
				/>
			}
		<hr className='mt-4'/>
		{similarMovies.data && <>
			<h3>Showing simlar movies to {aSingleMovie.data?.title} </h3>
			<div className='roling-div row'>
				<MoviesCard
				data={similarMovies.data.results}
				/>
			</div>
		</>
		}
		</div>
  )
}

export default MovieDetailsPage
