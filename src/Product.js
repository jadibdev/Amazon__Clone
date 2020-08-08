import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		// Add item to basket
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	{
		/* Oh wow, I was trying to debug this all night, 
            I’m still working on the shopping basket it turns out 
            the solution is simply a number generator, I tried to use id, 
            price and rating as keys but the console always replied with a
             “Warning: Encountered two children with the same key”  
             though all these values were unique, it drove me absolutely nuts. 
             This morning I thought why not forget all these values, 
             obviously they are not recognized as unique somehow, so I just passed a Math.random()
             and BAM!!! The error disappeared and my next coffee sip felt epic!!!
			 */
	}
	return (
		<div className='product'>
			<div className='product__info'>
				<p className='product__title'>{title}</p>
				<p className='product__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map(_ => {
							return <p key={Math.random()}>⭐</p>;
						})}
				</div>
			</div>

			<img src={image} alt='' />
			<button onClick={addToBasket}>Add to basket</button>
		</div>
	);
}

export default Product;
