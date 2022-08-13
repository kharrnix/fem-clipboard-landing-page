import React from "react";
import "./Header.css";
import LinkButtonPrimary from "./LinkButtonPrimary";
import LinkButtonSecondary from "./LinkButtonSecondary";
import iconLogo from "../images/logo.svg";

export default function Header() {
	return (
		<>
			<header className="header">
				<img className="header__logo" src={iconLogo} alt="" />
				<h1 className="header__heading">
					A history of everything you copy
				</h1>
				<p className="header__paragraph">
					Clipboard allows you to track and organize everything you
					copy. Instantly access your clipboard on all your devices.
				</p>
				<LinkButtonPrimary link="/download" text="Download for iOS" />
				<LinkButtonSecondary link="/download" text="Download for Mac" />
			</header>
		</>
	);
}
