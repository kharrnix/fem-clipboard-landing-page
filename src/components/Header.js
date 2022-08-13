import React from "react";
import iconLogo from "../images/logo.svg";

export default function Header() {
	return (
		<>
			<header>
				<img src={iconLogo} alt="" />
				<h1>A history of everything you copy</h1>
				<p>
					Clipboard allows you to track and organize everything you
					copy. Instantly access your clipboard on all your devices.
				</p>
				<a href="#">Download for iOS</a>
				<a href="#">Download for Mac</a>
			</header>
		</>
	);
}
