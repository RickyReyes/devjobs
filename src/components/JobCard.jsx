import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { Link } from "react-router-dom";

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
	} = job;
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`card ${theme}`}>
			<div
				className="logo-container"
				style={{ backgroundColor: logoBackground }}
			>
				<img src={logo} className="logo" alt="YO" />
			</div>
			<div className="card__flex">
				<p>{postedAt}</p>
				<p>&#8226;</p>
				<p>{contract}</p>
			</div>

			<h1>
				<Link className={`card__position ${theme}`} to={`/${id}`}>
					{position}
				</Link>
			</h1>

			<p>{company}</p>
			<small>{location}</small>
		</div>
	);
};

export default JobCard;
