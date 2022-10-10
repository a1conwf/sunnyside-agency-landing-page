import React from "react";

//Styles
import "./Gallery.scss";

//Images
import milkBottles from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "../../assets/images/desktop/image-gallery-orange.jpg";
import coneImg from "../../assets/images/desktop/image-gallery-cone.jpg";
import sugarCubes from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
	return (
		<div className="gallery">
			<img className="gallery__img" src={milkBottles} alt="milk-bottles-img" />
			<img className="gallery__img" src={orangeImg} alt="orange-img" />
			<img className="gallery__img" src={coneImg} alt="cone-img" />
			<img className="gallery__img" src={sugarCubes} alt="sugar-cubes-img" />
		</div>
	);
};

export default Gallery;
