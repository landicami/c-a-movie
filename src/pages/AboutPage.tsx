const AboutPage = () => {
  return (
	<div className='bg-white text-dark col-8 d-flex justify-content-center mt-4 p-4 border rounded'>
		<div className='row'>
			<div>
				<h1>Hi, this is my schoolproject</h1>
			</div>
			<div>
				<p>
					Im using the api from <a className="movie-link" href="https://developer.themoviedb.org/">here</a> with bearer key.
					I only use up to 500 results in pagination due to <a className="movie-link" href="https://www.themoviedb.org/talk/61bbb4dc6a300b00977d906c">this info</a>.
				</p>
					<hr/>
					<a className="movie-link" href="https://github.com/landicami">Visit my github! </a>
			</div>
		</div>
	</div>
	)
}

export default AboutPage
