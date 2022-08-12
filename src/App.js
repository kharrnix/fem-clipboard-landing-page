import "./App.css";

import iconLogo from "./images/logo.svg";
import iconBlacklist from "./images/icon-blacklist.svg";
import iconText from "./images/icon-text.svg";
import iconPreview from "./images/icon-preview.svg";
import iconFacebook from "./images/icon-facebook.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconInstagram from "./images/icon-instagram.svg";

import imgComputer from "./images/image-computer.png";
import imgDevices from "./images/image-devices.png";

import logoGoogle from "./images/logo-google.png";
import logoIBM from "./images/logo-ibm.png";
import logoMicrosoft from "./images/logo-microsoft.png";
import logoHPE from "./images/logo-hp.png";
import logoVectorGraphics from "./images/logo-vector-graphics.png";

function App() {
	return (
		<>
			<header>
				<img src={iconLogo} alt="" />
				<h1>A history of everything you copy</h1>
				<p>
					Clipboard allows you to track and organize everything you
					copy. Instantly access your clipboard on all your devices.
				</p>
				<a href="#">Download for iOS</a>
				<a href="#">Download for Mac</a>
			</header>

			<section>
				<h2>Keep track of your snippets</h2>
				<p>
					Clipboard instantly stores any item you copy in the cloud,
					meaning you can access your snippets immediately on all your
					devices. Our Mac and iOS apps will help you organize
					everything.
				</p>

				<img src={imgComputer} alt="" />
				<h3>Quick Search</h3>
				<p>
					Easily search your snippets by content, category, web
					address application, and more.
				</p>
				<h3>iCloud Sync</h3>
				<p>
					Instantly syncs and saves snippets across all your devices.
				</p>
				<h3>Complete History</h3>
				<p>
					Retrieve any snippets from the first moment you started
					using the app.
				</p>
			</section>

			<section>
				<h2>Access Clipboard anywhere</h2>
				<p>
					Whether you're on the go, or at your computer, you can
					access all your Clipboard snippets in a few simple clicks.
				</p>
				<img src={imgDevices} alt="" />
			</section>

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
