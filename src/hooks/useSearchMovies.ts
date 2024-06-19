import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../service/movieAPi';

const useSearchMovies = (query: string, pageParams: number) => {
  return useQuery({
	queryKey: ["moviesBySearch", {query, pageParams} ],
	queryFn: () => searchMovies(query, pageParams),
	enabled: !!query
});
}

export default useSearchMovies
