
import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <>
	<div className="">
		<div className="">
			<h1 className="text-center align-items-center">Welcome</h1>
			<div className='d-flex justify-content-center'>

			<div className="p-2 border rounded mb-2 col-lg-6 col-sm-12">
			<h2>Find ze code for your favorite movie</h2>

			<Link to={"/nowplaying"} className='btn btn-secondary m-1' role='button'>Now playing</Link>
			<Link to={"/trending"} className='btn btn-secondary m-1' role='button'>Trending</Link>
			<Link to={"/genres"} className='btn btn-secondary m-1' role='button'>Top Rated</Link>
			<Link to={"/genres"} className='btn btn-secondary m-1' role='button'>By genre</Link>



		</div>
		</div>

	</div>

	</div>


    </>
  );
};

export default HomePage;
