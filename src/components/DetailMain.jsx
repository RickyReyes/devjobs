const DetailMain = ({ job }) => {
	const {
		postedAt,
		contract,
		theme,
		position,
		description,
		location,
		requirements,
		role,
	} = job;
	return (
		<main className="detail-main">
			<div className="tablet-flex">
				<div className="tablet-flex__left">
					<div className="card__flex">
						<p>{postedAt}</p>
						<p>&#8226;</p>
						<p>{contract}</p>
					</div>
					<h2>{position}</h2>
					<small>{location}</small>
				</div>
				<button className="btn">Apply Now</button>
			</div>
			<p>{description}</p>
			<h2 className="requirements">Requirements</h2>
			<p>{requirements.content}</p>
			<ul>
				{requirements.items.map((item) => (
					<li>
						<span className="bullet">&#8226;</span>{" "}
						<span className="item">{item}</span>
					</li>
				))}
			</ul>
			<h2>What You Will Do</h2>
			<p>{role.content}</p>
			<ol>
				{role.items.map((item, id) => (
					<li>
						<span className="number">{id + 1}</span>
						<div className="item">{item}</div>
					</li>
				))}
			</ol>
		</main>
	);
};

export default DetailMain;
