import React from 'react';

const NavBar = () => {

	return (
		<nav className='headerNav'>
			<ul>
				<li>
					<input type='search' placeholder='Buscar'/> <span>Buscar</span>
				</li>
				<li>
					<a>Natural Wood</a>
				</li>
				<li>
					<a>Minimalista</a>
				</li>
				<li>
					<a>Tematicos</a>
				</li>
				<li>
					<a>Personalizados</a>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;