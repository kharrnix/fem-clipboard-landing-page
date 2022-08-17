import React from "react";
import "./Footer.css";
import iconLogo from "../images/logo.svg";
import iconFacebook from "../images/icon-facebook.svg";
import iconTwitter from "../images/icon-twitter.svg";
import iconInstagram from "../images/icon-instagram.svg";

export default function Footer() {
	return (
		<>
			<footer>
				<img src={iconLogo} alt="" />
				<nav>
					<ul>
						<li>
							<a href="#">FAQs</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
					</ul>
					<ul role="list">
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Press Kit</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="#">Install Guide</a>
						</li>
					</ul>
				</nav>
				<ul role="list">
					<li>
						<a href="#">
							<img src={iconFacebook} alt="Facebook logo" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={iconTwitter} alt="Twitter logo" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={iconInstagram} alt="Instagram logo" />
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
}
