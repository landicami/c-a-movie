import { useState, useEffect } from 'react';
import { getGenres } from '../service/movieAPi';
import { useQuery } from '@tanstack/react-query';
import Form from "react-bootstrap/Form";

const GenresPage = () => {
  const [genre, setGenre] = useState(() => {
    return localStorage.getItem('selectedGenre') || "";
  });

  const genresFromApi = useQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  });

//   const movesByGenre = useQuery({
// 	queryKey: ["moviesByGenre"],
// 	queryFn:
//   })

  useEffect(() => {
    localStorage.setItem('selectedGenre', genre);
  }, [genre]);

  return (
    <>
		<div className='p-2 mb-2'>
			<h1 className='text-center'>Choose movie by genre por favor</h1>

		<Form.Select
			aria-label="Select movie by genre"
			onChange={e => setGenre(e.target.value)}
			value={genre}
		>
			<option value="">Select a genre</option>
			{genresFromApi.data && genresFromApi.data.genres.map((genre) => (
			<option key={genre.id} value={genre.name}>{genre.name}</option>
			))}
		</Form.Select>

    	{genre && <h3 className="mt-4">Showing movies by {genre}</h3>}

		{genresFromApi.isError && <h2>Ops! An error occured: {genresFromApi.error.message}</h2>}

		</div>

    </>
  );
}

export default GenresPage;
