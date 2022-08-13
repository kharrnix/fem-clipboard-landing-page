import React from "react";
import "./SectionThree.css";
import imgDevices from "../images/image-devices.png";

export default function SectionThree() {
	return (
		<>
			<section className="section3">
				<h2 className="section3__heading">Access Clipboard anywhere</h2>
				<p className="section3__paragraph">
					Whether you're on the go, or at your computer, you can
					access all your Clipboard snippets in a few simple clicks.
				</p>
				<img className="section3__image" src={imgDevices} alt="" />
			</section>
		</>
	);
}
