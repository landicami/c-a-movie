import { useState, useEffect } from 'react';
import { getGenres, getMovieByGenre } from '../service/movieAPi';
import { useQuery } from '@tanstack/react-query';
import Form from "react-bootstrap/Form";
import { useSearchParams } from 'react-router-dom';
import MoviesCard from '../components/MoviesCard';

const GenresPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const pageParams = Number(searchParams.get("page")) || 1;


	const [genreId, setGenreId] = useState(() => {
    	return localStorage.getItem('selectedGenre') || "";
	});

	const genresFromApi = useQuery({
		queryKey: ['genres'],
		queryFn: getGenres,
	});

	const moviesByGenre = useQuery({
		queryKey: ["moviesByGenre", {genreId, pageParams} ],
		queryFn: () => getMovieByGenre(Number(genreId), pageParams)
  	})

	useEffect(() => {
    	localStorage.setItem('selectedGenre', genreId);
  	}, [genreId]);

  return (
    <>
		<div className='p-2 mb-2'>
			<h1 className='text-center'>Choose movie by genre por favor</h1>

		<Form.Select
			aria-label="Select movie by genre"
			onChange={e => setGenreId(e.target.value)}
			value={genreId}
		>
			<option value="">Select a genre</option>
			{genresFromApi.data && genresFromApi.data.genres.map((genre) => (
			<option key={genre.id} value={genre.id}>{genre.name}</option>
			))}
		</Form.Select>


		{genresFromApi.isError && <h2 className='pt-2'>Ops! An error occured: {genresFromApi.error.message}</h2>}
		{moviesByGenre.isError && <h2 className='pt-2'>Ops! An error occured: {moviesByGenre.error.message}</h2>}
		{genreId && <h3 className="mt-4">Showing movies by {genresFromApi.data?.genres.find(genre => genre.id === Number(genreId))?.name}</h3>}


		<div className='row'>
		{moviesByGenre.data &&
		<MoviesCard
		data={moviesByGenre.data.results}
		/>
		}
		</div>

		</div>

    </>
  );
}

export default GenresPage;
