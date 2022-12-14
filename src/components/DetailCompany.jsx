const DetailCompany = ({ job }) => {
	const { logo, logoBackground, company, website } = job;
	return (
		<div className="detail-company">
			<div
				className="logo-container"
				style={{ backgroundColor: logoBackground }}
			>
				<img className="logo" src={logo} alt="company logo" />
			</div>
			<div>
				<h2 className="detail-company__name">{company}</h2>
				<p className="detail-company__site">
					{company.toLowerCase().split(" ").join("")}.com
				</p>
			</div>
			<a className="btn-container" target="_blank" href={website}>
				<button className="btn">Company Site</button>
			</a>
		</div>
	);
};

export default DetailCompany;
