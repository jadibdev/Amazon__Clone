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
			<div className='home__row'>
				<Product
					id='52373165'
					title='Keurig K-Cafe Coffee Maker, Single Serve K-Cup Pod Coffee, Latte and Cappuccino Maker, Comes with '
					price={168.95}
					rating={5}
					image='https://m.media-amazon.com/images/I/81e7redWiIL._AC_UY218_.jpg'
				/>
				<Product
					id='450415530'
					title="Hit Refresh: The Quest to Rediscover Microsoft's Soul and Imagine a Better Future for Everyone"
					price={14.49}
					rating={5}
					image='https://m.media-amazon.com/images/I/817OWJ4q6GL._AC_UY218_.jpg'
				/>
			</div>

			<div className='home__row'>
				<Product
					id='809900878'
					title='Fitbit Inspire HR Heart Rate and Fitness Tracker, One Size (S and L Bands Included), 1 Count'
					price={99}
					rating={5}
					image='https://m.media-amazon.com/images/I/61fPdr7lutL._AC_UY218_.jpg'
				/>
				<Product
					id='366311112'
					title='Lean In:
Women, Work, and the Will to Lead'
					price={12.32}
					rating={5}
					image='https://m.media-amazon.com/images/I/410iYqsGTCL._SL500_.jpg'
				/>
				<Product
					id='464604504'
					title='iHome Google Assistant Built-in Chromecast Smart Home Alarm Clock with Wi-Fi'
					price={79.99}
					rating={5}
					image='https://m.media-amazon.com/images/I/81qtwI--03L._AC_UL320_.jpg'
				/>
			</div>

			{/* Product*/}
		</div>
	);
}

export default Home;
