import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
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

  return (
	<div className='p-2 border rounded mb-2 row '>
		<h1 className='text-center'>{actor.data && actor.data?.name}</h1>

		{movies.data?.cast.map(movie => <p>{movie.title}</p>)}



	</div>  )
}

export default ActorPage
