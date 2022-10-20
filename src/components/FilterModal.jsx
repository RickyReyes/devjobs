import SearchBarLarge from "./SearchBarLarge";

const FilterModal = ({
	modalRef,
	handleFilterDataChange,
	handleSearch,
	handleEnter,
	filterData,
	setFilterData,
	setShowFilterModal,
}) => {
	return (
		<section className="filter-modal">
			<SearchBarLarge
				setFilterData={setFilterData}
				modalRef={modalRef}
				filterModal={true}
				handleFilterDataChange={handleFilterDataChange}
				handleSearch={handleSearch}
				handleEnter={handleEnter}
				filterData={filterData}
				setShowFilterModal={setShowFilterModal}
			/>
		</section>
	);
};

export default FilterModal;
