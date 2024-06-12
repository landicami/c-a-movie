import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import { getActor } from '../service/movieAPi';

const ActorPage = () => {
	const { id } = useParams();
	const actorId = Number(id);

	const actor = useQuery({
		queryKey: ["actor", {id: actorId}],
		queryFn: () => getActor(actorId),
	})

  return (
	<div className='p-2 border rounded mb-2 row '>
		<h1 className='text-center'>{actor.data && actor.data?.name}</h1>



	</div>  )
}

export default ActorPage
