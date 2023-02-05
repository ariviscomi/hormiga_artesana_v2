import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

const HeaderCart = () => {
  return (
	<div id='headerCart' className='cart'>
		<button className='cartIcon'>
			<MdShoppingCart/>
		</button>
	</div>
  )
}

export default HeaderCart