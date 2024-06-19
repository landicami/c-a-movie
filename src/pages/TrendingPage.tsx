import MoviesCard from '../components/MoviesCard';
import useTrending from '../hooks/useTrending';

const TrendingPage = () => {
	const nowTrending = useTrending();


  return (
	<div className='p-2 mb-2 row '>
		<h1 className='text-center'>Showing trending movies</h1>
		{nowTrending.data && <p className='text-center'>Showing 20 of {nowTrending.data.total_results} movies</p>}

		{nowTrending.isError && <h2>Ops! An error occured: {nowTrending.error.message}</h2>}

		{nowTrending.data &&
		<MoviesCard
		data={nowTrending.data.results}
		/>
		}
	</div>
  )
}

export default TrendingPage
