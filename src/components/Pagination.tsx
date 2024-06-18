import React from "react";
import Button from "react-bootstrap/Button";

interface PaginationProps{
	hasNextPage: boolean
	hasPreviousPage: boolean;
	page: number
	onNextPage: () => void;
	onPreviousPage: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
	page,
	hasPreviousPage,
	hasNextPage,
	onNextPage,
	onPreviousPage,
  }) => {
  return (

		<div className='row'>
			<div className='d-flex justify-content-center'>
				<div>
				<Button
				variant="secondary"
				onClick={onPreviousPage}
				disabled={hasPreviousPage}
				>
					&laquo;
				</Button>
				</div>
				<div className='mb-0 p-2 rounded'>
					<p className='m-0'>
						{page} of {500}
					</p>
				</div>
				<div>
					<Button
					variant="secondary"
					onClick={onNextPage}
					disabled={hasNextPage}
					>
					&raquo;</Button>
				</div>
			</div>
		</div>

  )
}

export default Pagination;
