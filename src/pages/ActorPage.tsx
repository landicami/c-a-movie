import { useParams } from 'react-router-dom'

//Components
import ActorCard from '../components/ActorCard';
import MoviesCard from '../components/MoviesCard';

//hooks
import useActor from '../hooks/useActor';
import useActorMovies from '../hooks/useActorMovies';

const ActorPage = () => {
	const { id } = useParams();
	const actorId = Number(id);

	const actor = useActor(actorId);

	const movies = useActorMovies(actorId);

  return (
	<div className='p-2 row '>
		{actor.isError && <h2>Ops! An error occured: {actor.error.message}</h2>}
		{movies.isError && <h2>Ops! An error occured: {movies.error.message}</h2>}

		{actor.data && movies.data &&
			<ActorCard
			actor={actor.data}
			/>
		}

		<hr className='mt-4'/>

		<h2 className='mt-4'>Stars in: </h2>
		<div className={'row rounded roling-div'}>
			{movies.data &&
			<MoviesCard data={movies.data.cast}
			/>
			}
		</div>

	</div>
	)
}

export default ActorPage
