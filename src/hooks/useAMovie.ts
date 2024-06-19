import { useQuery } from '@tanstack/react-query'
import { getASingleMovie } from '../service/movieAPi'

const useAMovie = (movieId: number) => {
  return useQuery({
	queryKey: ["movie", {id: movieId}],
	queryFn: () => getASingleMovie(movieId),
	enabled: !!movieId
})
}

export default useAMovie
