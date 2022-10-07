import DetailCompany from "../components/DetailCompany";
import DetailMain from "../components/DetailMain";
import DetailFooter from "../components/DetailFooter";

import { useContext } from "react";
import { ThemeContext } from "../themeContext";

const JobDetail = ({ job }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`job-detail ${theme}`}>
			<DetailCompany job={job} />
			<DetailMain job={job} />
			<DetailFooter job={job} />
		</div>
	);
};

export default JobDetail;
