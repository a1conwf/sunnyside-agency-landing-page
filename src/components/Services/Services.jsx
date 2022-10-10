import React from "react";

//Styles
import "./Services.scss";

//Images
import transformImg from "../../assets/images/desktop/image-transform.jpg";
import standOutImg from "../../assets/images/desktop/image-stand-out.jpg";

const Services = () => {
	return (
		<section className="services">
			<div className="service__1 transform">
				<img className="transform__img" src={transformImg} alt="egg-img" />
				<div className="service__1-content">
					<h2>Transform your brand</h2>
					<p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
					<div className="cta">
						<button className="cta-title">Learn More</button>
						<div className="cta-overlay"></div>
					</div>
				</div>
			</div>

			<div className="service__1 standout">
				<img className="standout__img" src={standOutImg} alt="glass-img" />
				<div className="service__1-content">
					<h2>Stand out to the right audience</h2>
					<p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
					<div className="cta">
						<button className="cta-title">Learn More</button>
						<div className="cta-overlay"></div>
					</div>
				</div>
			</div>

			<div className="service__2-container">
				<div className="service__2 graphic-design">
					<div className="service__2-content">
						<h3 className="service__2-title">Graphic Design</h3>
						<p className="service__2-text">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
					</div>
				</div>

				<div className="service__2 photography">
					<div className="service__2-content">
						<h3 className="service__2-title">Photography</h3>
						<p className="service__2-text">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
