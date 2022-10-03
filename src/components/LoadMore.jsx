import React from "react";

const LoadMore = ({ setLoadMore }) => {
	return (
		<button className="load-more" onClick={() => setLoadMore(true)}>
			Load More
		</button>
	);
};

export default LoadMore;
