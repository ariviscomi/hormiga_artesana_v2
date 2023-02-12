import React from 'react';
import { useContext } from 'react';
import { MdShoppingCart, MdRemoveShoppingCart } from 'react-icons/md';

import { cartContext } from '../../context/cartContext';

const HeaderCart = () => {

	const { clear } = useContext(cartContext);

	return (
		<div id='headerCart' className='cart'>
			<div>
				<MdShoppingCart className='Icon' />
				<span className='count'>
					0
				</span>
			</div>
			<button 
				className='clear'
				onClick={() => clear}
			>
				<MdRemoveShoppingCart />
				<span>
					Borrar Carrito
				</span>
			</button>
		</div>
	);
};

export default HeaderCart;