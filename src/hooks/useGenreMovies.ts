import { useQuery } from '@tanstack/react-query';
import { getMovieByGenre } from '../service/movieAPi';

const useGenreMovies = (genreId: string, pageParams: number) => {
  return useQuery({
	queryKey: ["moviesByGenre", {genreId, pageParams} ],
	queryFn: () => getMovieByGenre(Number(genreId), pageParams),
	enabled: !!genreId
});
}

export default useGenreMovies
