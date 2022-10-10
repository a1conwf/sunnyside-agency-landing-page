import React from "react";

//Styles
import "./Footer.scss";

//Logo and icons
import logo from "../../assets/brand/logo-green.svg";
import iconFacebook from "../../assets/svg/icon-facebook.svg";
import iconInstagram from "../../assets/svg/icon-instagram.svg";
import iconTwitter from "../../assets/svg/icon-twitter.svg";
import iconPinterest from "../../assets/svg/icon-pinterest.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__inner">
				<img src={logo} alt="logo-img" className="footer__logo" />
				<div className="footer__nav">
					<ul className="footer__nav-list">
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
					</ul>
				</div>

				<div className="footer__socials">
					<ul className="footer__socials-list">
						<li>
							<a href="#">
								<img src={iconFacebook} alt="icon-facebook" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src={iconInstagram} alt="icon-instagram" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src={iconTwitter} alt="icon-twitter" />
							</a>
						</li>
						<li>
							<a href="#">
								<img src={iconPinterest} alt="icon-pinterest" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
