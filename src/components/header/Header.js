import React from 'react';
import { Link } from 'react-router-dom';

import HeaderMenu from "../headMenu/HeaderMenu";
import HeaderCart from "../cart/HeaderCart";

const Header = () => {
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
};

export default Header;