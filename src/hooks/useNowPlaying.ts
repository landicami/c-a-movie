import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovies } from '../service/movieAPi';

const useNowPlaying = () => {
  return useQuery({
	queryKey: ["nowPlaying"],
	queryFn: getNowPlayingMovies
});
}

export default useNowPlaying
