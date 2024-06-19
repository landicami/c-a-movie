import { useQuery } from '@tanstack/react-query';
import { getSimilarMovies } from '../service/movieAPi';

const useSimilar = (movieId: number) => {
  return useQuery({
	queryKey: ["similarMovies", {id: movieId}],
	queryFn: () => getSimilarMovies(movieId)
});
}

export default useSimilar
