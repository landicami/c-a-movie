import React, { useState } from 'react'
//bootstrap
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';

interface SearchFormProps {
	onSearchMovie: (search: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearchMovie }) => {

	const [searchInput, setSearchInput] = useState("");

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSearchMovie(searchInput)
		setSearchInput("");
	};

  return (
		<Container className='col-lg-6 col-sm-12 mb-5'>
			<Form onSubmit={handleSearchSubmit}>
				<InputGroup>
					<Form.Control
						id="movie-search"
						name="movie-search"
						placeholder="Search for any movie!"
						aria-label="Search the database"
						aria-describedby="basic-search"
						type="text"
						value={searchInput}
						required
						onChange={e => setSearchInput(e.target.value)}
					/>

					<Button variant="secondary">
						Get movies!
					</Button>
				</InputGroup>
			</Form>
		</Container>  )
}

export default SearchForm
