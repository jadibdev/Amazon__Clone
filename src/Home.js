import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className='home'>
			<img
				className='home__image'
				src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
				alt='amazon header'
			/>

			{/* Product id, title, price, rating, image */}
			<Product
				id='123211341'
				title="Trillion Dollar Coach: The Leadership Playbook of Silicon Valley's Bill Campbell"
				price={19.69}
				rating={5}
				image='https://m.media-amazon.com/images/I/91kMO2mcsHL._AC_UY218_.jpg'
			/>
			{/* */}
		</div>
	);
}

export default Home;
