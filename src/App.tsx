import "./App.css";
import data from "./data.json";

import { useState, useContext } from "react";
import { Routes, Route } from "react-router";
import { ThemeContext } from "./themeContext";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchBarLarge from "./components/SearchBarLarge";
import Jobs from "./components/Jobs";
import LoadMoreBtn from "./components/LoadMoreBtn";
import FilterModal from "./components/FilterModal";

import JobDetail from "./routes/JobDetail";

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
	const [jobData, setJobData] = useState<IJob[]>(data);
	const [loadMore, setLoadMore] = useState<boolean>(false);
	const [showFilterModal, setShowFilterModal] = useState<boolean>(false);

	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={`App ${theme}`}
			// style={{ position: showFilterModal ? "fixed" : "static" }}
		>
			{showFilterModal && <FilterModal />}
			<Header />
			<SearchBar
				showFilterModal={showFilterModal}
				setShowFilterModal={setShowFilterModal}
			/>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<SearchBarLarge filterModal={false} />
							<Jobs jobData={jobData} loadMore={loadMore} />
							{!loadMore && (
								<LoadMoreBtn setLoadMore={setLoadMore} />
							)}
						</>
					}
				></Route>
				{jobData.map((job) => (
					<Route
						path={`/${job.id}`}
						element={<JobDetail job={job} />}
					></Route>
				))}
			</Routes>
		</div>
	);
}

export default App;
