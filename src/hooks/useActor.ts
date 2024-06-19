import { useQuery } from '@tanstack/react-query'
import { getActor } from '../service/movieAPi'

const useActor = (actorId: number) => {
  return useQuery({
		queryKey: ["actor", {id: actorId}],
		queryFn: () => getActor(actorId),
	})
}

export default useActor
