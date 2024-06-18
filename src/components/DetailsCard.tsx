import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup  from "react-bootstrap/ListGroup";
import { ASingleMovieResponse, Crew } from '../service/movieTypes';
import { Link } from 'react-router-dom';
import TanstackBasicTable from './table/TanstackTable';
import { ColumnDef } from '@tanstack/react-table';

interface ASingleMovieProps {
	data: ASingleMovieResponse
}

const columnDefs: ColumnDef<Crew>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "department",
		header: "Department",
	},
	{
		accessorKey: "job",
		header: "Job",

	}
];

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
					<div className='d-flex justify-content-between col-lg-4 col-md-6 col-sm-12'>
						<Card.Img
						className={data.poster_path ? 'picture-in-card' : ""}
						src={data.poster_path ? `https://image.tmdb.org/t/p/w500/${data.poster_path}` : "/no-img.png"}

						/>
					</div>
					<div className='col-lg-6 col-md-6 col-sm-12'>
						<p className='text-start tagline mt-2 pt-3'>"{data.tagline ? data.tagline : 'No tagline'}"</p>
						<p className='text-start tagline-sm mt-2 pt-1'>Runtime: {data.runtime ? formatRuntime(data.runtime) : "No runtime"} </p>
						<p className='text-start tagline-sm mt-2 pt-1'>Vote: {data.vote_average ? data.vote_average : "No vote"} </p>
						<p className='text-start tagline-sm mt-2 pt-1'>Release date: {data.release_date ? data.release_date : "No info"} </p>

					</div>
				</div>
				<Card.Title>{data.title}</Card.Title>
					<Card.Text className="flex-grow-1">
						{data.overview}
					</Card.Text>
			</Card.Body>

			<ListGroup className="list-group-flush">

				<ListGroup.Item><strong>Genres: </strong>
				{data.genres.map(genre =>
					<Link key={genre.id} to={"/genres/?page=1&genre=" + genre.id} role="button" className='btn btn-sm btn-outline-secondary me-1'>{genre.name}</Link>)}
				</ListGroup.Item>
				<ListGroup.Item><Link to={data.homepage}>Homepage</Link></ListGroup.Item>
				<ListGroup.Item><strong>Original title:</strong> {data.original_title}</ListGroup.Item>
				<ListGroup.Item><strong>Spoken languages:</strong> {data.spoken_languages.map(language => language.english_name).join(", ")}</ListGroup.Item>
				<ListGroup.Item><strong>Production companies:</strong> {data.production_companies.map(company => company.name).join(", ")}</ListGroup.Item>

			</ListGroup>
		</Card>

		<hr className='mt-4'/>


		<h2 className='mt-4'>Actors, scroll down to see more:</h2>
		<div className='row rounded roling-div'>
			{data.credits.cast.map(actor =>
			<Card key={actor.id} className='col-lg-2 col-sm-6 mt-2'>
				<Card.Body>
					<div className='d-flex justify-content-center'>
					<Card.Img

						className='picture-in-card-sm '
						src={actor.profile_path ?`https://image.tmdb.org/t/p/w500/${actor.profile_path}` : "/no-img.png"}
						alt="Actor of a movie"
					/>
					</div>

					<Link className="movie-link" to={"/actor/" + actor.id}><Card.Title className='mt-2'>{actor.name}</Card.Title></Link>
					<Card.Text>as {actor.character}</Card.Text>
				</Card.Body>
			</Card>
		)}
		</div>

		<hr className='mt-4'/>

		<h2 className='mt-4'>Crew</h2>
		<div>
			<TanstackBasicTable columns={columnDefs} data={data.credits.crew} />
		</div>
</>
	)
}

export default DetailsCard
