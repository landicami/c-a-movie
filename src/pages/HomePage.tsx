
import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <>
	<div className="d-flex justify-content-center">
		<div className="text-center">
			<h1 className="m-4">Welcome</h1>

			<div className="p-4 border rounded mb-2 col-lg-12 col-sm-12 cinema-short mb-4">
			<h2 className="text-center">Find ze code for your favorite movie</h2>

			<Link to={"/nowplaying"} className='btn btn-secondary m-1' role='button'>Now playing</Link>
			<Link to={"/trending"} className='btn btn-secondary m-1' role='button'>Trending</Link>
			<Link to={"/toprated"} className='btn btn-secondary m-1' role='button'>Top Rated</Link>
			<Link to={"/genres"} className='btn btn-secondary m-1' role='button'>By genre</Link>

			</div>

	</div>

	</div>


    </>
  );
};

export default HomePage;
