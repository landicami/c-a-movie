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
	<div className='p-2 border rounded mb-2 row '>
		<h1 className='text-center'>{aSingleMovie.data.title}</h1>

		<DetailsCard
		data={aSingleMovie.data} />

	</div>
  )
}

export default MovieDetailsPage
