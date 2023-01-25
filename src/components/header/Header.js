import React from 'react';
import HeaderMenu from "./HeaderMenu"
import HeaderCart from "./HeaderCart"
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header id='header' className='header'>
			<HeaderMenu />
			<div id='headerLogo' className='logo'>
				<Link to='/'>
					<img src='./Logo-64x64.png' alt='logo' />
				</Link>
			</div>
			<HeaderCart />
		</header>
	)
}