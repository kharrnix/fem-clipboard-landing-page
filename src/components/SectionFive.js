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
			<section>
				<img src={logoGoogle} alt="Google logo" />
				<img src={logoIBM} alt="IBM logo" />
				<img src={logoMicrosoft} alt="Microsoft logo" />
				<img src={logoHPE} alt="Hewlett Packard Enterprise logo" />
				<img src={logoVectorGraphics} alt="Vector Graphics logo" />
			</section>
		</>
	);
}
