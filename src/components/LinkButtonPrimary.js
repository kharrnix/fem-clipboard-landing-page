import React from "react";
import "./LinkButton.css";

export default function LinkButtonPrimary(props) {
	return (
		<a href={props.link} className="link-btn link-btn--primary">
			{props.text}
		</a>
	);
}
