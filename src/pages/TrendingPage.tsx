import { useQuery } from '@tanstack/react-query'
import { getNowTrendingMovies } from '../service/movieAPi'
import MoviesCard from '../components/MoviesCard';

const TrendingPage = () => {
	const nowTrending = useQuery({
		queryKey: ["nowTrending"],
		queryFn: getNowTrendingMovies
	});


  return (
	<div className='p-2 mb-2 row '>
		<h1 className='text-center'>Showing trending movies</h1>
		{nowTrending.isError && <h2>Ops! An error occured: {nowTrending.error.message}</h2>}

		{nowTrending.data &&
		<MoviesCard
		movies={nowTrending.data}
		/>
		}
	</div>
  )
}

export default TrendingPage
