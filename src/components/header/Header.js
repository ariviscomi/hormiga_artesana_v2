import React from 'react';
import NavBar from "./NavBar"
import HeaderMenu from "./HeaderMenu"
import HeaderCart from "./HeaderCart"

export const Header = () => {
  return (
	<header>
		<NavBar/>
		<HeaderMenu/>
		<div id='headerLogo' className='logo'>
			<img src='./images/Logo-64x64.png' alt='logo'/>
		</div>
		<HeaderCart/>
	</header>
  )
}
