import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
	const navigate = useNavigate()
  return (
	<Container>
		<h2>This page doesn't exists. Wanna go back?</h2>
		<Button
		onClick={() => navigate(-1)}>Take me back now!</Button>
	</Container>
  )
}

export default NotFoundPage
