import React from 'react'
import ReactPaginate from 'react-paginate'

export const Pagination = ({ pageCount, changePage}) => {
	return (
		<div className="paginate">

			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				breakLabel={'...'}
				breakClassName={'break-me'}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={'pagination'}
				activeClassName={'active'}
			/>
		</div>
	)
}