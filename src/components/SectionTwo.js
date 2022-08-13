import React from "react";
import "./SectionTwo.css";

import imgComputer from "../images/image-computer.png";

export default function SectionTwo() {
	return (
		<>
			<section className="section2">
				<div className="section2__container">
					<h2 className="section2__heading">
						Keep track of your snippets
					</h2>
					<p className="section2__paragraph">
						Clipboard instantly stores any item you copy in the
						cloud, meaning you can access your snippets immediately
						on all your devices. Our Mac and iOS apps will help you
						organize everything.
					</p>
				</div>

				<div className="section2__grid-container">
					<div className="section2__column1">
						<img
							className="section2__image"
							src={imgComputer}
							alt=""
						/>
					</div>
					<div className="section2__column2">
						<h3 className="section2__secondary-heading">
							Quick Search
						</h3>
						<p className="section2__paragraph">
							Easily search your snippets by content, category,
							web address application, and more.
						</p>
						<h3 className="section2__secondary-heading">
							iCloud Sync
						</h3>
						<p className="section2__paragraph">
							Instantly syncs and saves snippets across all your
							devices.
						</p>
						<h3 className="section2__secondary-heading">
							Complete History
						</h3>
						<p className="section2__paragraph">
							Retrieve any snippets from the first moment you
							started using the app.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
