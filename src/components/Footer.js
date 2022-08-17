import React from "react";
import "./Footer.css";
import iconLogo from "../images/logo.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconInstagram from "../images/icon-instagram.svg";

export default function Footer() {
	return (
		<>
			<footer className="footer">
				<img className="footer__logo" src={iconLogo} alt="" />
				<nav className="footer__nav">
					<ul className="footer__column">
						<li>
							<a href="/faq" className="footer__link">
								FAQs
							</a>
						</li>
						<li>
							<a href="/contact" className="footer__link">
								Contact Us
							</a>
						</li>
					</ul>
					<ul className="footer__column">
						<li>
							<a href="/privacy" className="footer__link">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="/press-kit" className="footer__link">
								Press Kit
							</a>
						</li>
					</ul>
					<ul className="footer__column">
						<li>
							<a href="/install" className="footer__link">
								Install Guide
							</a>
						</li>
					</ul>
					<ul className="footer__column">
						<li>
							<a
								href="https://facebook.com"
								className="footer__link"
							>
								<img
									className="footer__icon"
									src={iconFacebook}
									alt="Facebook logo"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com"
								className="footer__link"
							>
								<img
									className="footer__icon"
									src={iconTwitter}
									alt="Twitter logo"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com"
								className="footer__link"
							>
								<img
									className="footer__icon"
									src={iconInstagram}
									alt="Instagram logo"
								/>
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</>
	);
}
