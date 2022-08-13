import React from "react";
import "./LinkButton.css";

export default function LinkButton(props) {
	return <a href={props.link}>{props.text}</a>;
}
