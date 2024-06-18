const AboutPage = () => {
  return (
	<div className='cinema-short col-8 d-flex justify-content-center mt-4 p-4 border'>
		<div className='row'>
			<div>
				<h1>Hi, this is my schoolproject</h1>
			</div>
			<div>
				<p>
					Im using the api from <a href="https://developer.themoviedb.org/">here</a> with bearer key.
					I only use 500 results in pagination due to <a href="https://www.themoviedb.org/talk/61bbb4dc6a300b00977d906c">this info	</a>
				</p>
			</div>
		</div>
	</div>
	)
}

export default AboutPage
