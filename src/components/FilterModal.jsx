import React from "react";
import SearchBarLarge from "./SearchBarLarge";

const FilterModal = () => {
	return (
		<section className="filter-modal">
			<SearchBarLarge filterModal={true} />
		</section>
	);
};

export default FilterModal;
