import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

	return (
		<nav className='headerNav'>
			<ul>
				<li>
					<Link>Natural Wood</Link>
				</li>
				<li>
					<Link>Minimalista</Link>
				</li>
				<li>
					<Link>Tematicos</Link>
				</li>
				<li>
					<Link>Personalizados</Link>
				</li>
				<li>
					<input type='search' placeholder='Buscar'/> <span>Buscar</span>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;