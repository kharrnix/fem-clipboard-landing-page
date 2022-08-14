import React from "react";
import "./SectionSix.css";
import LinkButtonPrimary from "./LinkButtonPrimary";
import LinkButtonSecondary from "./LinkButtonSecondary";

export default function SectionSix() {
	return (
		<>
			<section className="section6">
				<h2 className="section6__heading">Clipboard for iOS and Mac OS</h2>
				<p className="section6__paragraph">
					Available for free on the App Store. Download for Mac or
					iOS, sync with iCloud and you’re ready to start adding to
					your clipboard.
				</p>

				<LinkButtonPrimary link="/download" text="Download for iOS"/>
				<LinkButtonSecondary link="/download" text="Download for Mac"/>
			</section>
		</>
	);
}
