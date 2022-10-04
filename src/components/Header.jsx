import { useContext } from "react";
import { ThemeContext } from "../themeContext";

const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	function handleToggle() {
		toggleTheme();
	}
	return (
		<header>
			<img src="./assets/desktop/logo.svg" alt="devjobs logo" />
			<div className="header__switch-and-icons">
				<img src="./assets/desktop/icon-sun.svg" alt="sun" />
				<div
					onClick={handleToggle}
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
