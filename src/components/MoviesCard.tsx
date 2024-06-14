import React from 'react'
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import { MoviesResponse } from '../service/movieTypes'
import { Link } from 'react-router-dom';

interface MoviesCardProps {
	movies: MoviesResponse
}

const MoviesCard: React.FC<MoviesCardProps> = ({ movies }) => {
	return (
		<>
		{movies.results && movies.results.map(movie =>
		<Container key={movie.id} className='col-12 col-md-6 col-lg-2 mb-3 mt-3  '>
		<Card>
		<Card.Body>
		<Link to={`/movies/${movie.id}`}>
			<Card.Img
				variant="top"
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt="Poster of a movie"

			/>
			</Link>
			</Card.Body>

				<Card.Body>
				<div className='d-flex flex-column align-items-center'>
					<h5>{movie.title}</h5>
				</div>

				<Link to={`/movies/${movie.id}`} className='movie-link'>Read more...</Link>

				</Card.Body>

		</Card>
		</Container>
		)}
		</>
  )
}

export default MoviesCard
