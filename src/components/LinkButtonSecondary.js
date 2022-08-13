import React from "react";
import "./LinkButton.css";

export default function LinkButtonSecondary(props) {
	return (
		<a href={props.link} className="link-btn link-btn--secondary">
			{props.text}
		</a>
	);
}