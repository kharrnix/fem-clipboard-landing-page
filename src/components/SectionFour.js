import React from "react";
import "./SectionFour.css"

import iconBlacklist from "../images/icon-blacklist.svg";
import iconText from "../images/icon-text.svg";
import iconPreview from "../images/icon-preview.svg";

export default function SectionFour() {
	return (
		<>
			<section>
				<h2>Supercharge your workflow</h2>
				<p>We've got the tools to boost your productivity.</p>

				<img src={iconBlacklist} alt="" />
				<h3>Create blacklists</h3>
				<p>
					Ensure sensitive information never makes its way to your
					clipboard by excluding certain sources.
				</p>
				<img src={iconText} alt="" />
				<h3>Plain text snippets</h3>
				<p>
					Remove unwanted formatting from copied text for a consistent
					look.
				</p>
				<img src={iconPreview} alt="" />
				<h3>Sneak preview</h3>
				<p>
					Quick preview of all snippets on your Clipboard for easy
					access.
				</p>
			</section>
		</>
	);
}
