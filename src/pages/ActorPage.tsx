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


  return (
	<div className='p-2 row '>
		<h1 className='text-center'>{actor.data && actor.data?.name}</h1>
		{actor.isError && <h2>Ops! An error occured: {actor.error.message}</h2>}
		{movies.isError && <h2>Ops! An error occured: {movies.error.message}</h2>}


	</div>  )
}

export default ActorPage
