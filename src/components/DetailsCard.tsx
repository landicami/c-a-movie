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
					<div className='d-flex col-lg-2 col-sm-4'>
						<Card.Img
						className='picture-in-card'
						src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`
						}
						/>
					</div>
					<div className='col-lg-10 col-sm-8'>
						<p className='text-start tagline mt-2 pt-3'>"{data.tagline}"</p>
						<p className='text-start tagline-sm mt-2 pt-1'>Runtime: {formatRuntime(data.runtime)} </p>
						<p className='text-start tagline-sm mt-2 pt-1'>Vote: {data.vote_average} </p>
						<p className='text-start tagline-sm mt-2 pt-1'>Release date: {data.release_date} </p>

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

		<hr className='mt-4'/>


		<h2 className='mt-4'>Actors, scroll down to see more:</h2>
		<div className='row rounded roling-div'>
		{data.credits.cast.map(actor =>
		<Card key={actor.id} className='col-lg-2 col-sm-4 mt-2'>
		<Card.Body>
			<Card.Img
				variant="top"
				src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
				alt="Actor of a movie"
			/>

			<Link className="actor-link" to={"/actor/" + actor.id}><Card.Title className='mt-2'>{actor.name}</Card.Title></Link>
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
