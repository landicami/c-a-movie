import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { ActorResponse } from '../service/movieTypes';


interface ActorProps {
	actor: ActorResponse
}

const ActorCard:React.FC<ActorProps> = ({actor}) => {
  return (
	<>
	<Card className='d-flex justify-content-center rounded p-2'>
			<Card.Body>
				<div className='row'>

					<div className='d-flex col-lg-4 col-md-6 col-sm-12'>

						<Card.Img
						className='picture-in-card'
						src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : "/no-img.png"}

						/>
					</div>
					<div className='col-lg-8 col-md-6 col-sm-12'>
					<Card.Title>{actor.name}</Card.Title>
					</div>

				</div>
						<p className='text-start tagline-sm'><strong>Biography: </strong> {actor.biography} </p>

						<ListGroup className="list-group-flush">

							<ListGroup.Item><strong>Birthday: </strong>{actor.birthday}</ListGroup.Item>
							<ListGroup.Item><strong>Gender: </strong>
							{actor.gender === 0 ? "Not set"
							: actor.gender === 1 ? "Female"
							: actor.gender === 2 ? "Male"
							:  actor.gender === 3 ? "Non binary" : "Not specified"}
							</ListGroup.Item>
							<ListGroup.Item><strong>Known for:</strong> {actor.known_for_department}</ListGroup.Item>
							<ListGroup.Item><strong>Place of birth:</strong> {actor.place_of_birth}</ListGroup.Item>

						</ListGroup>
			</Card.Body>
			</Card>

	</>
  )
}

export default ActorCard
