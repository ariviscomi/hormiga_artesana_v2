import React, { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { cartContext } from '../../context/cartContext';

const HeaderCart = () => {

	const { cart } = useContext(cartContext) ;

	return (
		<div id='headerCart' className='cart'>
			<MdShoppingCart className='cartIcon'/>
			<span className='cartIcon'>
				0
			</span>
		</div>
	);
};

export default HeaderCart;