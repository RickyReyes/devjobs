import "./App.css";
import data from "./data.json";

import { useState, useContext } from "react";
import { ThemeContext } from "./themeContext";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchBarLarge from "./components/SearchBarLarge";
import Jobs from "./components/Jobs";
import LoadMore from "./components/LoadMore";
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
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`App ${theme}`}>
			<Header />
			<SearchBar />
			<SearchBarLarge />
			<Jobs jobData={jobData} loadMore={loadMore} />
			{!loadMore && <LoadMore setLoadMore={setLoadMore} />}
		</div>
	);
}

export default App;
