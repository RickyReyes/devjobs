import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import { Link } from "react-router-dom";

const Header = ({ setFilterData, setRenderedJobs, allJobs, setLoadMore }) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<header>
			<Link
				onClick={() => {
					setFilterData({ title: "", location: "", fullTime: false });
					setRenderedJobs(allJobs);
					setLoadMore(false);
				}}
				to="/"
			>
				<img src="./assets/desktop/logo.svg" alt="devjobs logo" />
			</Link>
			<div className="header__switch-and-icons">
				<img src="./assets/desktop/icon-sun.svg" alt="sun" />
				<div
					onClick={toggleTheme}
					style={{
						justifyContent:
							theme === "light" ? "flex-start" : "flex-end",
					}}
					className="header__switch"
				>
					<div className="header__switch-circle"></div>
				</div>
				<img src="./assets/desktop/icon-moon.svg" alt="moon" />
			</div>
		</header>
	);
};

export default Header;
