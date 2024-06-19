import { useParams } from 'react-router-dom'
import DetailsCard from '../components/DetailsCard';
import useAMovie from '../hooks/useAMovie';
import MoviesCard from '../components/MoviesCard';
import useSimilar from '../hooks/useSimilar';
import { useEffect } from 'react';

const MovieDetailsPage = () => {
	const {id} = useParams();
	const movieId = Number(id);

	const aSingleMovie = useAMovie(movieId);

	const similarMovies = useSimilar(movieId);


	const updateLocalStorage = (movieId: number) => {
		localStorage.setItem("historyMovies", JSON.stringify(movieId || ""))
	}

	useEffect(() => {
		if(aSingleMovie.data){
		updateLocalStorage(aSingleMovie.data.id)
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
