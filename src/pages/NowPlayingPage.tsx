import MoviesCard from '../components/MoviesCard';
import useNowPlaying from '../hooks/useNowPlaying';

const NowPlayingPage = () => {
	const nowPlaying = useNowPlaying();


  return (
	<div className='p-2 mb-2 row '>
		<h1 className='text-center'>Showing now playing movies</h1>
		{nowPlaying.data && <p className='text-center'>Showing 20 of {nowPlaying.data.total_results} movies</p>}
		{nowPlaying.isError && <h2>Ops! An error occured: {nowPlaying.error.message}</h2>}

		{nowPlaying.data &&
			<MoviesCard
			data={nowPlaying.data.results}
			/>
		}

	</div>
  )
}

export default NowPlayingPage
