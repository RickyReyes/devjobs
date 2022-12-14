import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import JobCard from "./JobCard";
const Jobs = ({ renderedJobs, loadMore }) => {
	const amount = loadMore ? 15 : 12;
	const { theme } = useContext(ThemeContext);
	return (
		<section className={`card-container ${theme}`}>
			{renderedJobs.slice(0, amount).map((job) => (
				<JobCard key={job.id} job={job} />
			))}
		</section>
	);
};

export default Jobs;
