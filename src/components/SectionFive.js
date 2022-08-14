import React from "react";
import "./SectionFive.css";
import logoGoogle from "../images/logo-google.png";
import logoIBM from "../images/logo-ibm.png";
import logoMicrosoft from "../images/logo-microsoft.png";
import logoHPE from "../images/logo-hp.png";
import logoVectorGraphics from "../images/logo-vector-graphics.png";

export default function SectionFive() {
	return (
		<>
			<section className="section5">
				<div className="section5__grid-container">
					<img
						className="section5__logo"
						src={logoGoogle}
						alt="Google logo"
					/>
					<img
						className="section5__logo"
						src={logoIBM}
						alt="IBM logo"
					/>
					<img
						className="section5__logo"
						src={logoMicrosoft}
						alt="Microsoft logo"
					/>
					<img
						className="section5__logo"
						src={logoHPE}
						alt="Hewlett Packard Enterprise logo"
					/>
					<img
						className="section5__logo"
						src={logoVectorGraphics}
						alt="Vector Graphics logo"
					/>
				</div>
			</section>
		</>
	);
}
