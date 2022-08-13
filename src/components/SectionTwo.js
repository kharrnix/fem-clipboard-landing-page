import React from "react";
import "./SectionTwo.css";

import imgComputer from "../images/image-computer.png";

export default function SectionTwo() {
	return (
		<>
			<section className="section2">
				<h2 className="section2__heading">Keep track of your snippets</h2>
				<p className="section2__paragraph">
					Clipboard instantly stores any item you copy in the cloud,
					meaning you can access your snippets immediately on all your
					devices. Our Mac and iOS apps will help you organize
					everything.
				</p>

				<img src={imgComputer} alt="" />
				<h3 className="section2__secondary-heading">Quick Search</h3>
				<p className="section2__paragraph">
					Easily search your snippets by content, category, web
					address application, and more.
				</p>
				<h3 className="section2__secondary-heading">iCloud Sync</h3>
				<p className="section2__paragraph">
					Instantly syncs and saves snippets across all your devices.
				</p>
				<h3 className="section2__secondary-heading">Complete History</h3>
				<p className="section2__paragraph">
					Retrieve any snippets from the first moment you started
					using the app.
				</p>
			</section>
		</>
	);
}
