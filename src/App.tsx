import { Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//bootstrap components
import Container from "react-bootstrap/Container"
//Pages
import AboutPage from './pages/AboutPage';
import ActorPage from './pages/ActorPage';
import GenresPage from './pages/GenresPage';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import NowPlayingPage from './pages/NowPlayingPage';
import TrendingPage from './pages/TrendingPage';
import TopRatedPage from './pages/TopRatedPage';


//Components
import Navigation from './components/Navigation';
import GlobalLoading from './components/GlobalLoading';
//Style
import clsx from 'clsx';
import '../src/assets/App.scss';
//Hooks
import useTheme from './hooks/useTheme';
import SearchPage from './pages/SearchPage';


function App() {
	const {isAnotherStyle} = useTheme();

	const myCssClasses = clsx({
		"bg-white": !isAnotherStyle,
		"text-dark": !isAnotherStyle,
		"cinema": isAnotherStyle,
		"text-white": isAnotherStyle,
	})

  return (
	<div className={myCssClasses}>
		<Navigation/>
			<GlobalLoading />
				<Container className='pt-2'>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/search" element={<SearchPage />} />

						<Route path="/nowplaying" element={<NowPlayingPage />} />
						<Route path="/trending" element={<TrendingPage />} />
						<Route path="/toprated" element={<TopRatedPage />} />
						<Route path="/genres" element={<GenresPage />} />
						<Route path="/genres/?page=1&genre=:id" element={<GenresPage />} />

						<Route path="/movies/:id" element={<MovieDetailsPage />}/>
						<Route path="/actor/:id" element={<ActorPage />}/>

						<Route path="/about" element={<AboutPage/>} />

						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Container>
		<ReactQueryDevtools />
	</div>
  )
}

export default App
