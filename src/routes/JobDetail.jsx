import DetailCompany from "../components/DetailCompany";
import DetailMain from "../components/DetailMain";
import DetailFooter from "../components/DetailFooter";

const JobDetail = ({ job }) => {
	return (
		<>
			<DetailCompany job={job} />
			<DetailMain job={job} />
			<DetailFooter />
		</>
	);
};

export default JobDetail;
