import React from "react";

const DetailCompany = ({ job }) => {
	console.log(job);
	const { logo, logoBackground, company, website } = job;
	return (
		<div className="detail-company">
			<div
				className="logo-container"
				style={{ backgroundColor: logoBackground }}
			>
				<img className="logo" src={logo} alt="company logo" />
			</div>
			<h2 className="detail-company__name">{company}</h2>
			<p>www.{company.toLowerCase().split(" ").join("")}.com</p>
		</div>
	);
};

export default DetailCompany;
