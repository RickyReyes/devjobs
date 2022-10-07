const DetailFooter = ({ job }) => {
	const { position, company } = job;
	return (
		<footer className="detail-footer">
			<div className="detail-footer__left">
				<h2>{position}</h2>
				<p>{company}</p>
			</div>
			<button className="btn">Apply Now</button>
		</footer>
	);
};

export default DetailFooter;
