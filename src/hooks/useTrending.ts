import { useQuery } from '@tanstack/react-query';
import { getNowTrendingMovies } from '../service/movieAPi';

const useTrending = () => {
  return useQuery({
	queryKey: ["nowTrending"],
	queryFn: getNowTrendingMovies
});
}

export default useTrending
