import { useParams } from 'react-router-dom'
import DetailsCard from '../components/DetailsCard';
import useAMovie from '../hooks/useAMovie';

const MovieDetailsPage = () => {
	const {id} = useParams();
	const movieId = Number(id);

	const aSingleMovie = useAMovie(movieId);

	return (
	<div className='p-2 mb-2 row '>

	{aSingleMovie.isError && <h2>Ops! An error occured: {aSingleMovie.error.message}</h2>}

		{aSingleMovie.data &&
			<DetailsCard
			data={aSingleMovie.data}
			 />
		}
	</div>
  )
}

export default MovieDetailsPage
