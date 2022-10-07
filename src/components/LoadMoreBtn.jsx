import React from "react";

const LoadMore = ({ setLoadMore }) => {
	return (
		<button className="load-more btn" onClick={() => setLoadMore(true)}>
			Load More
		</button>
	);
};

export default LoadMore;
