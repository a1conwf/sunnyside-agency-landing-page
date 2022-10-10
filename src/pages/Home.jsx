import React from "react";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<>
			<Header />
			<main>
				<Services />
				<Testimonials />
				<Gallery />
			</main>
			<Footer />
		</>
	);
};

export default Home;
