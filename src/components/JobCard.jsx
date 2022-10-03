import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

const JobCard = ({ job }) => {
	const {
		id,
		company,
		logo,
		logoBackground,
		position,
		postedAt,
		contract,
		location,
		website,
		apply,
		description,
		requirements,
		role,
	} = job;

	const { theme } = useContext(ThemeContext);

	return (
		<div className={`card ${theme}`}>
			<div
				className="card__logo-container"
				style={{ backgroundColor: logoBackground }}
			>
				<img src={logo} className="card__logo" alt="YO" />
			</div>
			<div className="card__flex">
				<p>{postedAt}</p>
				<p>&#8226;</p>
				<p>{contract}</p>
			</div>
			<h1>{position}</h1>
			<p>{company}</p>
			<small>{location}</small>
		</div>
	);
};

export default JobCard;
