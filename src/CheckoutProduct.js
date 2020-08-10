import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image }) {
	const [{ basket }, dispatch] = useStateValue();

	console.log(id, title, price, rating, image);

	const removeFromBasket = () => {
		// remove item from basket
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className='checkoutProduct'>
			<img src={image} alt='' className='checkoutProduct__image' />
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'>{title}</p>

				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>

				<div className='checkoutProduct__rating'>
					{Array(rating)
						.fill()
						.map(_ => {
							return <p key={Math.random()}>⭐</p>;
						})}
				</div>

				<button onClick={removeFromBasket}>Remove from basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
