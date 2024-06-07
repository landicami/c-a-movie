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

function App() {

  return (
	<>
		<Navigation/>
			<Container className='pt-2'>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/genres" element={<GenresPage />} />

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Container>

		<ReactQueryDevtools />
	</>
  )
}

export default App
