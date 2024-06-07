import { useState } from 'react';
import { getGenres } from '../service/movieAPi';
import { useQuery } from '@tanstack/react-query';

import Form from "react-bootstrap/Form";

const GenresPage = () => {
	const [genre, setGenre] = useState("")
	console.log(genre);

	const { data: genres, error, isError, isLoading } = useQuery({
		queryKey: ['genres'],
		queryFn: getGenres,
	  });


  return (
	<>
		<h1 className='bg-white text-dark p-2 rounded'>Choose movie by genre por favor</h1>
		<Form.Select
			aria-label="Select movie by genre"
			onChange={e => setGenre(e.target.value)}
		>
			{genres && genres.genres.map((genre) => (
				<option key={genre.id} value={genre.name}>{genre.name}</option>
		))};
		</Form.Select>

		{!genres && <p>No data available yet...</p>}

		{isLoading && <p>Loading...</p>}

		{isError && (error.message)}

	</>
  )
}

export default GenresPage
