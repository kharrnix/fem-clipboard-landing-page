import React from "react";
import "./SectionThree.css";
import imgDevices from "../images/image-devices.png";

export default function SectionThree() {
	return (
		<>
			<section>
				<h2>Access Clipboard anywhere</h2>
				<p>
					Whether you're on the go, or at your computer, you can
					access all your Clipboard snippets in a few simple clicks.
				</p>
				<img src={imgDevices} alt="" />
			</section>
		</>
	);
}
