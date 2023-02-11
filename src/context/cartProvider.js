import React, { useState } from 'react'
import { cartContext } from "./cartContext";

const CartProvider = ({ children }) => {

	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
		const newProduct = {
			id: item.id,
			category: item.category,
			title: item.title,
			img: item.img,
			desc: item.desc,
			price: item.price,
			stock: item.stock,
			quantity: quantity
		};

		setCart([...cart, newProduct]);
	};

	return (
		<cartContext.Provider
			value={{cart, addItem}}
		>
			{children}
		</cartContext.Provider>
	);
}

export default CartProvider;