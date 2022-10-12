import SearchBarLarge from "./SearchBarLarge";

const FilterModal = ({ modalRef }) => {
	return (
		<section className="filter-modal">
			<SearchBarLarge modalRef={modalRef} filterModal={true} />
		</section>
	);
};

export default FilterModal;
