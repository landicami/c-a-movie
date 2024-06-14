import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom'
import { getActor, getActorMovies } from '../service/movieAPi';

const ActorPage = () => {
	const { id } = useParams();
	const actorId = Number(id);

	const actor = useQuery({
		queryKey: ["actor", {id: actorId}],
		queryFn: () => getActor(actorId),
	})

	const movies = useQuery({
		queryKey: ["movies", {id: actorId}],
		queryFn: () => getActorMovies(actorId)
	})

	if(!movies){
		return <p>No data available yet...</p>
	}

  return (
	<div className='p-2 border rounded mb-2 row '>
		<h1 className='text-center'>{actor.data && actor.data?.name}</h1>

		{movies.data?.cast.map(movie => <Link to={`/movies/${movie.id}`}><p key={movie.id}>{movie.title}</p></Link>)}



	</div>  )
}

export default ActorPage
