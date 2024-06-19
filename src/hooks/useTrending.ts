import { useQuery } from '@tanstack/react-query';
import { getNowTrendingMovies } from '../service/movieAPi';

const useTrending = (trending: string) => {
  return useQuery({
	queryKey: ["nowTrending", trending],
	queryFn: () => getNowTrendingMovies(trending),
	enabled: !!trending
});
}

export default useTrending
