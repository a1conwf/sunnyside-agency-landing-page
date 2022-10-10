import React from "react";
import "./Testimonials.scss";
import {testimonialsData} from "../../data/data";

const Testimonials = () => {
	return (
		<section className="testimonials">
			<h4 className="testimonials__title">Client testimonials</h4>
			<div className="testimonials__container">
				{testimonialsData.map((client) => (
					<div className="testimonial" key={client.id}>
						<img src={require("../../assets/" + client.profileImage + ".jpg")} alt="profile-img" className="testimonial__img" />
						<p className="testimonial__comment">{client.comment}</p>
						<div className="testimonial__about">
							<span className="testimonial__about-fullname">{client.fullname}</span>
							<span className="testimonial__about-position">{client.position}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
