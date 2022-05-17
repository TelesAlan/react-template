import { scrollTo } from "./../../utils/general";
import { BsPlayCircle } from "react-icons/bs";

import "./style.scss";
export default function Header(){
	return (
		<header id="header" className="container">
			<div>
				<h1>React responsive template</h1>
				<p className="color-medium mb-5">Ut, animi architecto doloremque exercitationem magni molestias unde illum atque iste nulla et ducimus voluptas officia.</p>

				<div className="buttons">
					<button className="w-100" onClick={() => scrollTo("about-us", -66)}>Learn More</button>
					<button className="w-100 light-outline">
						<BsPlayCircle className="mr-1" /> Watch Video
					</button>
				</div>
			</div>
		</header>
	);
}