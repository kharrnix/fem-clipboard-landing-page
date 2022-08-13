import React from "react";
import "./SectionTwo.css";

import imgComputer from "../images/image-computer.png";

export default function SectionTwo() {
	return (
		<>
			<section>
				<h2>Keep track of your snippets</h2>
				<p>
					Clipboard instantly stores any item you copy in the cloud,
					meaning you can access your snippets immediately on all your
					devices. Our Mac and iOS apps will help you organize
					everything.
				</p>

				<img src={imgComputer} alt="" />
				<h3>Quick Search</h3>
				<p>
					Easily search your snippets by content, category, web
					address application, and more.
				</p>
				<h3>iCloud Sync</h3>
				<p>
					Instantly syncs and saves snippets across all your devices.
				</p>
				<h3>Complete History</h3>
				<p>
					Retrieve any snippets from the first moment you started
					using the app.
				</p>
			</section>
		</>
	);
}
