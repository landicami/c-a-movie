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
		<div className='p-2 border rounded mb-2'>
			<h1>Choose movie by genre por favor</h1>

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

		{!genresFromApi.data && <p>No data available yet...</p>}
		{/* {isLoading && <p>Loading...</p>} gör en global Loading*/}
		{genresFromApi.isError && <p>{genresFromApi.error.message}</p>}
		</div>

    </>
  );
}

export default GenresPage;
