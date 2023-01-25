import React from 'react';
import HeaderMenu from "./HeaderMenu"
import HeaderCart from "./HeaderCart"

export const Header = () => {
	return (
		<header id='header' className='header'>
			<HeaderMenu />
			<div id='headerLogo' className='logo'>
				<img src='./Logo-64x64.png' alt='logo' />
			</div>
			<HeaderCart />
		</header>
	)
}