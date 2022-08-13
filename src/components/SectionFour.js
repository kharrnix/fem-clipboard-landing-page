import React from "react";
import "./SectionFour.css";

import iconBlacklist from "../images/icon-blacklist.svg";
import iconText from "../images/icon-text.svg";
import iconPreview from "../images/icon-preview.svg";

export default function SectionFour() {
	return (
		<>
			<section className="section4">
				<h2 className="section4__heading">Supercharge your workflow</h2>
				<p className="section4__main-paragraph">
					We've got the tools to boost your productivity.
				</p>

				<img className="section4__icon" src={iconBlacklist} alt="" />
				<h3 className="section4__secondary-heading">
					Create blacklists
				</h3>
				<p className="section4__paragraph">
					Ensure sensitive information never makes its way to your
					clipboard by excluding certain sources.
				</p>
				<img className="section4__icon" src={iconText} alt="" />
				<h3 className="section4__secondary-heading">
					Plain text snippets
				</h3>
				<p className="section4__paragraph">
					Remove unwanted formatting from copied text for a consistent
					look.
				</p>
				<img className="section4__icon" src={iconPreview} alt="" />
				<h3 className="section4__secondary-heading">Sneak preview</h3>
				<p className="section4__paragraph">
					Quick preview of all snippets on your Clipboard for easy
					access.
				</p>
			</section>
		</>
	);
}
