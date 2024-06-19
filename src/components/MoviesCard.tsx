import React from 'react'
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container";
import { Movie } from '../service/movieTypes'
import { Link } from 'react-router-dom';

interface MoviesCardProps {
	data: Movie[]
}

const MoviesCard: React.FC<MoviesCardProps> = ({ data }) => {
	return (
		<>
		{data && data.map(movie =>
		<Container key={movie.id} className='col-lg-3 col-md-3 col-sm-6 mb-3 mt-3'>
		<Card>
		<Card.Body className='no-spacer'>
		<Link to={`/movies/${movie.id}`}>
			<Card.Img
				variant="top"
				src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : "/no-img.png"}
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
