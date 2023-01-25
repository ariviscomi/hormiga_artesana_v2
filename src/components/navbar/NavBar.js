import React from 'react';

const NavBar = () => {

	return (
		<nav className='headerNav'>
			<ul>
				<li>
					<span>Natural Wood</span>
				</li>
				<li>
					<span>Minimalista</span>
				</li>
				<li>
					<span>Tematicos</span>
				</li>
				<li>
					<span>Personalizados</span>
				</li>
				<li>
					<input type='search' placeholder='Buscar'/> <span>Buscar</span>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;