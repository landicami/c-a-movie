import { useQuery } from '@tanstack/react-query'
import { getActorMovies } from '../service/movieAPi'

const useActorMovies = (actorId: number) => {
  return useQuery({
	queryKey: ["movies", {id: actorId}],
	queryFn: () => getActorMovies(actorId)
})
}

export default useActorMovies
