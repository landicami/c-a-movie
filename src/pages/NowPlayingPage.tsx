import { useQuery } from '@tanstack/react-query'
import { getNowPlayingMovies } from '../service/movieAPi'
import MoviesCard from '../components/MoviesCard';

const NowPlayingPage = () => {
	const nowPlaying = useQuery({
		queryKey: ["nowPlaying"],
		queryFn: getNowPlayingMovies
	});

	if(!nowPlaying.data){
		return <p>No data available yet...</p>
	}

  return (
	<div className='p-2 mb-2 row '>
		<h1 className='text-center'>Showing now playing movies</h1>

		<MoviesCard
		movies={nowPlaying.data}
		/>

		{nowPlaying.isError && <p>{nowPlaying.error.message}</p>}
	</div>
  )
}

export default NowPlayingPage
