import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

/* filterModal (param) is a boolean that is true if the SearchBarLarge is the one used for the filter modal, and false if is the one used on tablet screen size and larger.  */

const SearchBarLarge = ({
	filterData,
	setFilterData,
	filterModal,
	modalRef,
	handleSearch,
	handleFilterDataChange,
	setShowFilterModal,
}) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div
			ref={filterModal ? modalRef : null}
			className={`search-bar search-bar-large ${theme} ${
				filterModal ? "modal" : ""
			}`}
		>
			<div className="filter-by-title">
				<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
						fill="#5964e0"
						fillRule="nonzero"
					/>
				</svg>
				<input
					value={filterData.title}
					onChange={(e) =>
						handleFilterDataChange(e.target.value, "title")
					}
					className={`search-bar__input lg ${theme}`}
					type="text"
					placeholder="Filter by title..."
				/>
			</div>
			<div className="filter-by-location">
				<img
					src="./assets/desktop/icon-location.svg"
					alt="search icon"
				/>
				<input
					value={filterData.location}
					onChange={(e) =>
						handleFilterDataChange(e.target.value, "location")
					}
					className={`search-bar__input lg ${theme}`}
					type="text"
					placeholder="Filter by location..."
				/>
			</div>
			<div className="full-time-search">
				<div className="full-time-container">
					<input
						className="checkbox"
						type="checkbox"
						name="full-time"
						checked={filterData.fullTime}
						onChange={() => {
							setFilterData((prevData) => ({
								...prevData,
								fullTime: !prevData.fullTime,
							}));
						}}
					/>
					<label className={theme} htmlFor="full-time">
						Full Time
					</label>
				</div>
				<button
					onClick={() => {
						handleSearch();
						setShowFilterModal(false);
					}}
					className="btn"
				>
					Search
				</button>
			</div>
		</div>
	);
};

export default SearchBarLarge;
