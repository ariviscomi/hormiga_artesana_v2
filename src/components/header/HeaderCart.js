import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const HeaderCart = () => {
  return (
	<div id='headerCart' className='cart'>
		<MdShoppingCart className='cartIcon'/>
	</div>
  )
}

export default HeaderCart