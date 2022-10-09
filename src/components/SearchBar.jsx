import { ThemeContext } from "../themeContext";
import { useContext } from "react";
const SearchBar = ({ showFilterModal, setShowFilterModal }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`search-bar ${theme}`}>
			<input
				className={`search-bar__input ${theme}`}
				type="text"
				placeholder="Filter by title..."
			/>
			<img
				onClick={() => setShowFilterModal(true)}
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
