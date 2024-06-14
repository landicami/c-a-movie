import { useQuery } from '@tanstack/react-query';
import { getTopRatedMovies } from '../service/movieAPi';
import MoviesCard from '../components/MoviesCard';

const TopRatedPage = () => {
	const topRated = useQuery({
		queryKey: ["topRated"],
		queryFn: getTopRatedMovies
	});


  return (
	<div className='p-2 mb-2 row '>
		<h1 className='text-center'>Showing top rated movies</h1>
		{topRated.isError && <h2>Ops! An error occured: {topRated.error.message}</h2>}


		{topRated.data &&
		<MoviesCard
		movies={topRated.data}
		/>
		}

	</div>
  )
}

export default TopRatedPage
