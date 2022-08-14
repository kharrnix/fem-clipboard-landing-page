import "./App.css";

import Header from "./components/Header";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";

import iconLogo from "./images/logo.svg";
import iconFacebook from "./images/icon-facebook.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconInstagram from "./images/icon-instagram.svg";

function App() {
	return (
		<>
			<Header/>
			<SectionTwo/>
			<SectionThree />
			<SectionFour />
			<SectionFive />
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
