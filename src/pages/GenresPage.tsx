import { getGenres } from '../service/movieAPi';
import { useQuery } from '@tanstack/react-query';

const GenresPage = () => {
	const { data, error, isError, isLoading } = useQuery({
		queryKey: ['genres'],
		queryFn: getGenres,
	  });

	  if(!data){
		console.log("nope")
		return;
	  }

  return (
		<>
		{!data && <p>No data available...</p>}

		{isLoading && <p>Loading...</p>}

		{isError && {error}}

		{data.genres && data.genres.map((genre) => (
			<p key={genre.id}>Each genre is {genre.name}</p>
		))};

		<p>{data.genres && data.genres.length}</p>
	  </>
  )
}

export default GenresPage
