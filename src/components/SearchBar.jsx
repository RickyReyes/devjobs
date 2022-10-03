const SearchBar = () => {
	return (
		<div className="search-bar">
			<input
				className="search-bar__input"
				type="text"
				placeholder="Filter by title..."
			/>
			<img
				className="search-bar__icon search-bar__filter"
				src="./assets/mobile/icon-filter.svg"
				alt="filter icon"
			/>
			<img
				className="search-bar__icon search-bar__search"
				src="./assets/desktop/icon-search.svg"
				alt="search icon"
			/>
		</div>
	);
};

export default SearchBar;
