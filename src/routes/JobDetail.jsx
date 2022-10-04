import DetailCompany from "../components/DetailCompany";
import DetailMain from "../components/DetailMain";

const JobDetail = ({ job }) => {
	return (
		<>
			<DetailCompany job={job} />
			{/* <DetailMain /> */}
		</>
	);
};

export default JobDetail;
