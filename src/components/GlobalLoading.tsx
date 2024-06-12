import { useIsFetching } from '@tanstack/react-query'

const GlobalLoading = () => {
	const isFetching = useIsFetching();
	return isFetching  ? (
		<div id="popcorn-wrapper">
			<div className="popcorn-spinner">
				<span className="popcorn">🎥</span>
				<span className="visually-hidden">Loading...</span>
			</div>
		</div>  )
		:
		(
			null
		)
}

export default GlobalLoading
