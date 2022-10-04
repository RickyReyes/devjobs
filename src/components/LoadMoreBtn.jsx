import React from "react";

const LoadMore = ({ setLoadMore }) => {
	return (
		<button className="btn" onClick={() => setLoadMore(true)}>
			Load More
		</button>
	);
};

export default LoadMore;
