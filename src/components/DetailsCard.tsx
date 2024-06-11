import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup  from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image"
import { ASingleMovieResponse } from '../service/movieTypes';
import { Link } from 'react-router-dom';

interface ASingleMovieProps {
	data: ASingleMovieResponse
}

const DetailsCard: React.FC<ASingleMovieProps> = ({data}) => {
	const formatRuntime = (runtime: number) => {
		const hours = Math.floor(runtime / 60);
		const minutes = runtime % 60;
		return `${hours}h ${minutes}m`;
	  };
  return (
	<>
		<Card className='d-flex justify-content-center rounded p-2'>
			<Card.Body>
				<div className='row'>
					<div className='d-flex col-lg-2 col-sm-4'>
						<Card.Img
						className='picture-in-card'
						src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`
						}
						/>
					</div>
					<div className='col-lg-10 col-sm-8'>
						<p className='text-start tagline mt-4 pt-4'>"{data.tagline}"</p>
						<p className='text-start tagline mt-4 pt-4'>Runtime: {formatRuntime(data.runtime)} </p>

					</div>
				</div>
				<Card.Title>{data.title}</Card.Title>
					<Card.Text className="flex-grow-1">
						{data.overview}
					</Card.Text>
			</Card.Body>

			<ListGroup className="list-group-flush">

				<ListGroup.Item><strong>Genres:</strong>  {data.genres.map(genre => genre.name).join(", ")}</ListGroup.Item>
				<ListGroup.Item><Link to={data.homepage}>Homepage</Link></ListGroup.Item>
				<ListGroup.Item><strong>Original title:</strong> {data.original_title}</ListGroup.Item>
				<ListGroup.Item><strong>Spoken languages:</strong> {data.spoken_languages.map(language => language.english_name).join(", ")}</ListGroup.Item>
				<ListGroup.Item><strong>Production companies:</strong> {data.production_companies.map(company => company.name).join(", ")}</ListGroup.Item>

			</ListGroup>
		</Card>

		<h2 className='mt-2'>Actors, scroll down to see more:</h2>
		<div className='row actors-div'>
		{data.credits.cast.map(actor =>
		<Card key={actor.id} className='col-lg-2 col-sm-4 mt-2'>
		<Card.Body>
			<Card.Img
				variant="top"
				src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
				alt="Poster of a movie"
			/>

			<Card.Title>{actor.name}</Card.Title>
			<Card.Text>as {actor.character}</Card.Text>
		</Card.Body>
		</Card>
		)}
		</div>

</>
	)
}

export default DetailsCard
