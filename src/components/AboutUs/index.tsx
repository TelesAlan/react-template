import SectionTitle from "./../SectionTitle";

import "./style.scss";
export default function AboutUs(){
	return (
		<section id="about-us" className="container">
			<SectionTitle
				title="About us"
				subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			/>

			<article className="my-5 color-medium">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate euismod ullamcorper. Ut ornare tellus quis hendrerit lobortis. Aliquam porttitor elit ac sollicitudin faucibus. Fusce eget nisl nibh. Ut fermentum augue sit amet congue feugiat. Ut bibendum, massa et interdum sollicitudin, ante dolor consequat sapien, ut elementum velit arcu vitae justo. Nam sollicitudin urna sed risus suscipit, sit amet ornare turpis euismod. Aenean luctus dignissim dolor sit amet posuere.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate euismod ullamcorper. Ut ornare tellus quis hendrerit lobortis. Aliquam porttitor elit ac sollicitudin faucibus. Fusce eget nisl nibh. Ut fermentum augue sit amet congue feugiat. Ut bibendum, massa et interdum sollicitudin, ante dolor consequat sapien, ut elementum velit arcu vitae justo. Nam sollicitudin urna sed risus suscipit, sit amet ornare turpis euismod. Aenean luctus dignissim dolor sit amet posuere.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate euismod ullamcorper. Ut ornare tellus quis hendrerit lobortis. Aliquam porttitor elit ac sollicitudin faucibus. Fusce eget nisl nibh. Ut fermentum augue sit amet congue feugiat. Ut bibendum, massa et interdum sollicitudin, ante dolor consequat sapien, ut elementum velit arcu vitae justo. Nam sollicitudin urna sed risus suscipit, sit amet ornare turpis euismod. Aenean luctus dignissim dolor sit amet posuere.</p>
			</article>

			<div className="text-align-center">
				<button className="w-100">Learn More</button>
			</div>
		</section>
	);
}