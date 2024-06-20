import MoviesCard from '../components/MoviesCard';
import useTrending from '../hooks/useTrending';
import Button from "react-bootstrap/Button"
import { useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

const TrendingPage = () => {
	const [tredningParam, setTrendingParam] = useSearchParams("")
	const trendingQuery = tredningParam.get("by") || "";
	const queryClient = useQueryClient();
	const nowTrending = useTrending(trendingQuery);


	const handleTrendClick = async (trendClick: string) => {
		setTrendingParam( {by: trendClick})
		queryClient.invalidateQueries({ queryKey: ["nowTrending"]})
	}


  return (
	<div className='p-2 mb-2 row '>
		<h1 className='text-center'>Showing trending movies</h1>

		<div className='d-flex justify-content-center'>
			<Button
				variant='secondary'
				className='me-2'
				onClick={() => handleTrendClick("week")}
			>
				By week
			</Button>
			<Button
				variant="secondary"
				onClick={() => handleTrendClick("day")}
			>
				By day
			</Button>
		</div>


		{nowTrending.data && <p className='text-center'>Showing 20 of {nowTrending.data.total_results} movies</p>}

		{nowTrending.isError && <h2>Ops! An error occured: {nowTrending.error.message}</h2>}

		{nowTrending.data &&
			<MoviesCard
			data={nowTrending.data.results}
			/>
		}
	</div>
  )
}

export default TrendingPage
