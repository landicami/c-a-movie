import { useQuery } from '@tanstack/react-query';
import { getGenres } from '../service/movieAPi';

const useGenresFromApi = () => {
  return useQuery({
	queryKey: ['genres'],
	queryFn: getGenres,
});
}

export default useGenresFromApi
