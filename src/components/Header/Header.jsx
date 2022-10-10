import React from "react";
import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";

//Styles
import "./Header.scss";
import "../../sass/_components.scss";

//Logo and icon
import logo from "../../assets/brand/logo.svg";
import arrowDown from "../../assets/svg/icon-arrow-down.svg";

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<header className="header">
			<div className="container">
				<div className="header__nav">
					<img src={logo} alt="logo-img" className="header__nav-logo" />

					{isExpanded && (
						<div className="header__nav-mobile">
							<div className="arrow-top"></div>
							<ul>
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Services</a>
								</li>
								<li>
									<a href="#">Projects</a>
								</li>
								<li>
									<a className="btn yellow" href="#">
										Contact
									</a>
								</li>
							</ul>
						</div>
					)}

					<ul className="header__nav-list">
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
						<li>
							<a className="btn light" href="#">
								Contact
							</a>
						</li>
					</ul>

					<div
						className="header__nav-hamburger"
						onClick={() => {
							setIsExpanded(!isExpanded);
						}}
					>
						{isExpanded ? <AiOutlineClose fill="#fff" /> : <GiHamburgerMenu fill="#fff" />}
					</div>
				</div>

				<div className="header__content">
					<h1>We are creatives</h1>
					<img src={arrowDown} alt="icon-arrow-down" />
				</div>
			</div>
		</header>
	);
};

export default Header;
