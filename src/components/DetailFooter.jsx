const DetailFooter = ({ job }) => {
	const { position, company, apply } = job;
	return (
		<footer className="detail-footer">
			<div className="detail-footer__inner">
				<div className="detail-footer__left">
					<h2>{position}</h2>
					<p>{company}</p>
				</div>
				<a href={apply} target="_blank">
					<button className="btn">Apply Now</button>
				</a>
			</div>
		</footer>
	);
};

export default DetailFooter;
