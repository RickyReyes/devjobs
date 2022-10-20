import "./App.css";
import data from "./data.json";

import { useState, useContext, useRef } from "react";
import { Routes, Route } from "react-router";
import { ThemeContext } from "./themeContext";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchBarLarge from "./components/SearchBarLarge";
import Jobs from "./components/Jobs";
import LoadMoreBtn from "./components/LoadMoreBtn";
import FilterModal from "./components/FilterModal";

import JobDetail from "./routes/JobDetail";

import useOnClickOutside from "./hooks/useOnClickOutside";

export type IJob = {
	id: number;
	company: string;
	logo: string;
	logoBackground: string;
	position: string;
	postedAt: string;
	contract: string;
	location: string;
	website: string;
	apply: string;
	description: string;
	requirements: {
		content: string;
		items: string[];
	};
	role: {
		content: string;
		items: string[];
	};
};

function App() {
	const [allJobs, setAllJobs] = useState<IJob[]>(data);
	const [renderedJobs, setRenderedJobs] = useState<IJob[]>(allJobs);
	const [loadMore, setLoadMore] = useState<boolean>(false);
	const [showFilterModal, setShowFilterModal] = useState<boolean>(false);
	const [filterData, setFilterData] = useState({
		title: "",
		location: "",
		fullTime: false,
	});

	const { theme } = useContext(ThemeContext);

	const modalRef = useRef(null);

	useOnClickOutside(modalRef, () => {
		setShowFilterModal(false);
	});

	function handleSearch() {
		setRenderedJobs(
			allJobs
				.filter((obj) =>
					obj.position.toLowerCase().includes(filterData.title.trim())
				)
				.filter((obj) =>
					obj.location
						.toLowerCase()
						.includes(filterData.location.trim())
				)
				.filter((obj) =>
					filterData.fullTime ? obj.contract === "Full Time" : obj
				)
		);
	}

	function handleFilterDataChange(
		e: React.ChangeEvent<HTMLInputElement>,
		name: string
	) {
		const { value } = e.target;
		setFilterData((prevData) => ({
			...prevData,
			[name]: typeof value === "string" ? value.toLowerCase() : value,
		}));
	}

	function handleEnter(
		e: React.KeyboardEvent<HTMLInputElement>,
		name: string
	) {
		const { value } = e.target as HTMLInputElement;
		if (e.key === "Enter") {
			setFilterData((prevData) => ({
				...prevData,
				[name]: value,
			}));
			handleSearch();
			setShowFilterModal(false);
		}
	}

	return (
		<div
			className={`App ${theme}`}
			style={{ position: showFilterModal ? "fixed" : "static" }}
		>
			{showFilterModal && (
				<FilterModal
					setFilterData={setFilterData}
					filterData={filterData}
					handleSearch={handleSearch}
					handleEnter={handleEnter}
					handleFilterDataChange={handleFilterDataChange}
					modalRef={modalRef}
					setShowFilterModal={setShowFilterModal}
				/>
			)}
			<Header
				setLoadMore={setLoadMore}
				setFilterData={setFilterData}
				allJobs={allJobs}
				setRenderedJobs={setRenderedJobs}
			/>
			<SearchBar
				handleEnter={handleEnter}
				filterData={filterData}
				handleFilterDataChange={handleFilterDataChange}
				handleSearch={handleSearch}
				setShowFilterModal={setShowFilterModal}
			/>

			<Routes>
				<Route
					path="/"
					element={
						<>
							<SearchBarLarge
								handleEnter={handleEnter}
								filterData={filterData}
								setFilterData={setFilterData}
								handleSearch={handleSearch}
								handleFilterDataChange={handleFilterDataChange}
								modalRef={null}
								filterModal={false}
								setShowFilterModal={setShowFilterModal}
							/>
							<Jobs
								renderedJobs={renderedJobs}
								loadMore={loadMore}
							/>
							{!loadMore && renderedJobs.length > 12 && (
								<LoadMoreBtn setLoadMore={setLoadMore} />
							)}
						</>
					}
				></Route>
				{renderedJobs.map((job) => (
					<Route
						key={job.id}
						path={`/${job.id}`}
						element={<JobDetail job={job} />}
					></Route>
				))}
			</Routes>
			{renderedJobs.length === 0 && (
				<div className={`no-results ${theme}`}>No results</div>
			)}
		</div>
	);
}

export default App;
