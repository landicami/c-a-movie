import { useQuery } from '@tanstack/react-query';
import { getTopRatedMovies } from '../service/movieAPi';

const useTopRated = () => {
  return useQuery({
	queryKey: ["topRated"],
	queryFn: getTopRatedMovies
});
}

export default useTopRated
