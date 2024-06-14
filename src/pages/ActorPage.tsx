import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import { getActor, getActorMovies } from '../service/movieAPi';
import ActorCard from '../components/ActorCard';
import MoviesCard from '../components/MoviesCard';
import useTheme from '../hooks/useTheme';

const ActorPage = () => {
	const {isAnotherStyle }= useTheme()
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
		{actor.isError && <h2>Ops! An error occured: {actor.error.message}</h2>}
		{movies.isError && <h2>Ops! An error occured: {movies.error.message}</h2>}

		{actor.data && movies.data &&
		<ActorCard
		actor={actor.data}
		/>
		}

		<hr className='mt-4'/>

		<h2 className='mt-4'>Stars in: </h2>
		<div className={isAnotherStyle ? 'row rounded roling-div' : " cinema row rounded roling-div"}>
			{movies.data &&
			<MoviesCard data={movies.data.cast}
			/>
			}
		</div>




	</div>
	)
}

export default ActorPage
