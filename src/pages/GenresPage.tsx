import { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import { useParams, useSearchParams } from 'react-router-dom';
import MoviesCard from '../components/MoviesCard';
import Pagination from '../components/Pagination';
import useGenresFromApi from '../hooks/useGenresFromApi';
import useGenreMovies from '../hooks/useGenreMovies';

const GenresPage = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const pageParams = Number(searchParams.get("page")) || 1;
	const genreUrlParams = searchParams.get("genre");

	const { id } = useParams();
	const genreIdfromParams = id;

	const [genreId, setGenreId] = useState(genreIdfromParams || genreUrlParams || "");

	const genresFromApi = useGenresFromApi();

	const moviesByGenre = useGenreMovies(genreId, pageParams)

	const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newGenreId = e.target.value;
		setGenreId(newGenreId);
		setSearchParams({page: "1", genre: newGenreId})
	};

	useEffect(() => {
	if (genreIdfromParams) {
		setGenreId(genreIdfromParams);
	}
	}, [genreIdfromParams]);

  return (
    <>
		<div className='p-2 mb-2'>
			<h1 className='text-center'>Choose movie by genre por favor</h1>

		<Form.Select
			aria-label="Select movie by genre"
			onChange={handleGenreChange}
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
		{moviesByGenre.data && <p className='text-center'>{moviesByGenre.data.total_results} movies</p>}


		{moviesByGenre.data &&
			<Pagination
			totalPages={moviesByGenre.data.total_pages > 500 ? 500 : moviesByGenre.data.total_pages}
			page={pageParams}
			hasNextPage={
				moviesByGenre.data.total_pages > 500
				? pageParams === 500
				: pageParams === moviesByGenre.data.total_pages}
			hasPreviousPage={pageParams === 1 }
			onNextPage={() => setSearchParams({page: (pageParams + 1).toString(), genre: genreUrlParams || ""} )}
			onPreviousPage={() => setSearchParams({page: (pageParams - 1).toString(), genre: genreUrlParams || ""})}
			/>
		}

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
