import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import { getASingleMovie } from '../service/movieAPi';
import DetailsCard from '../components/DetailsCard';

const MovieDetailsPage = () => {
	const {id} = useParams();
	const movieId = Number(id);

	const aSingleMovie = useQuery({
		queryKey: ["movie", {id: movieId}],
		queryFn: () => getASingleMovie(movieId)

	})

	if(!aSingleMovie.data){
		return <p>No data available...</p>
	}

	return (
	<div className='p-2 mb-2 row '>
		<DetailsCard
		data={aSingleMovie.data} />

	</div>
  )
}

export default MovieDetailsPage
