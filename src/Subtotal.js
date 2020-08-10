import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	return (
		<div className='subtotal'>
			{/* Price */}
			<CurrencyFormat
				renderText={value => (
					<div style={{ margin: 0 }}>
						<p>
							Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
