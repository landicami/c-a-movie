
import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <>
	<div className='p-2 border rounded mb-2'>
		<div className="col-sm-12">
		<h1>Find ze code for your favorite movie</h1>

		<Link to={"/nowplaying"} className='btn btn-secondary m-1' role='button'>Now playing</Link>
		<Link to={"/genres"} className='btn btn-secondary m-1' role='button'>Trending</Link>
		<Link to={"/genres"} className='btn btn-secondary m-1' role='button'>Top Rated</Link>
		<Link to={"/genres"} className='btn btn-secondary m-1' role='button'>By genre</Link>



		</div>
	</div>


    </>
  );
};

export default HomePage;
