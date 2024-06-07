import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
	const navigate = useNavigate()
  return (
	<Container className="bg-white text-dark p-2">
		<h1>This page doesn't exists. Wanna go back?</h1>
		<Button
		onClick={() => navigate(-1)}>Take me back now!</Button>
	</Container>
  )
}

export default NotFoundPage
