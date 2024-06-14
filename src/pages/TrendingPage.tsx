import { useQuery } from '@tanstack/react-query'
import { getNowTrendingMovies } from '../service/movieAPi'
import MoviesCard from '../components/MoviesCard';

const TrendingPage = () => {
	const nowTrending = useQuery({
		queryKey: ["nowTrending"],
		queryFn: getNowTrendingMovies
	});

	if(!nowTrending.data){
		return <p>No data available yet...</p>
	}

  return (
	<div className='p-2 mb-2 row '>
		<h1 className='text-center'>Showing trending movies</h1>

		<MoviesCard
		movies={nowTrending.data}
		/>

		{nowTrending.isError && <p>{nowTrending.error.message}</p>}
	</div>
  )
}

export default TrendingPage
