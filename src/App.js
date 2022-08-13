import "./App.css";

import Header from "./components/Header";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

import iconLogo from "./images/logo.svg";
import iconBlacklist from "./images/icon-blacklist.svg";
import iconText from "./images/icon-text.svg";
import iconPreview from "./images/icon-preview.svg";
import iconFacebook from "./images/icon-facebook.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconInstagram from "./images/icon-instagram.svg";

import logoGoogle from "./images/logo-google.png";
import logoIBM from "./images/logo-ibm.png";
import logoMicrosoft from "./images/logo-microsoft.png";
import logoHPE from "./images/logo-hp.png";
import logoVectorGraphics from "./images/logo-vector-graphics.png";

function App() {
	return (
		<>
			<Header/>
			<SectionTwo/>
			<SectionThree />
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

			<section>
				<img src={logoGoogle} alt="Google logo" />
				<img src={logoIBM} alt="IBM logo" />
				<img src={logoMicrosoft} alt="Microsoft logo" />
				<img src={logoHPE} alt="Hewlett Packard Enterprise logo" />
				<img src={logoVectorGraphics} alt="Vector Graphics logo" />
			</section>

			<section>
				<h2>Clipboard for iOS and Mac OS</h2>
				<p>
					Available for free on the App Store. Download for Mac or
					iOS, sync with iCloud and you’re ready to start adding to
					your clipboard.
				</p>
				<a href="#">Download for iOS</a>
				<a href="#">Download for Mac</a>
			</section>

			<footer>
				<img src={iconLogo} alt="" />
				<nav>
					<ul>
						<li>
							<a href="#">FAQs</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
					</ul>
					<ul role="list">
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Press Kit</a>
						</li>
					</ul>
					<ul>
						<li>
							<a href="#">Install Guide</a>
						</li>
					</ul>
				</nav>
				<ul role="list">
					<li>
						<a href="#">
							<img src={iconFacebook} alt="Facebook logo" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={iconTwitter} alt="Twitter logo" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src={iconInstagram} alt="Instagram logo" />
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
}

export default App;
