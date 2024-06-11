import { Route, Routes } from 'react-router-dom';
//bootstrap components
import Container from "react-bootstrap/Container"
//Pages
import HomePage from './pages/HomePage';

import '../src/assets/App.scss';
import Navigation from './components/Navigation';
import NotFoundPage from './pages/NotFoundPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GenresPage from './pages/GenresPage';
import useTheme from './hooks/useTheme';
import clsx from 'clsx';
import NowPlayingPage from './pages/NowPlayingPage';

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
			<Container className='pt-2'>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/nowplaying" element={<NowPlayingPage />} />
					<Route path="/genres" element={<GenresPage />} />

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Container>

		<ReactQueryDevtools />
	</div>
  )
}

export default App
