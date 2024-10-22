import { useSearchParams } from 'react-router-dom';
import useSearchMovies from '../hooks/useSearchMovies';
import SearchForm from '../components/SearchForm';
import Pagination from '../components/Pagination';
import MoviesCard from '../components/MoviesCard';

const SearchPage = () => {
	const [searchParams, setSearchParams ] = useSearchParams();

	const searchParamsQuery = searchParams.get("query") || "";
	const pageParams = Number(searchParams.get("page")) || 1;


	const searchMovieBase = async (search: string) => {
		setSearchParams({ query: search.trim(), page: "1"})
	}

	const searchResponse = useSearchMovies(searchParamsQuery, pageParams)

  return (
	<>
	<h1 className='mb-5'>Search for any movie you like</h1>
	<SearchForm
	onSearchMovie={searchMovieBase}
	/>

	{searchResponse.data &&
		<Pagination
		totalPages={searchResponse && searchResponse.data.total_pages > 500 ? 500 : searchResponse.data.total_pages}
		page={pageParams}
		hasNextPage={pageParams === searchResponse.data.total_pages}
		hasPreviousPage={pageParams === 1 }
		onNextPage={() => setSearchParams({page: (pageParams + 1).toString(), query: searchParamsQuery } )}
		onPreviousPage={() => setSearchParams({page: (pageParams - 1).toString(), query: searchParamsQuery })}
		/>
	}

	<div className="row">
		{searchResponse.data && <>
		<p>You searched for "{searchParamsQuery}" and got {searchResponse.data.total_results} hits and there is {searchResponse.data.total_pages}.</p>

			<MoviesCard
			data={searchResponse.data.results}
			/>
		</>
		}

		{searchResponse.data?.results.length === 0 &&
			<p>
				No movies on that search, try againg!
			</p>
		}</div>
		</>
  )
}

export default SearchPage
