import React from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const NavBar = () => {

	return (
		<nav className='headerNav'>
			<ul>
				<Box sx={{ minWidth: 120 }}>
					<FormControl fullWidth>
						<InputLabel id="select-label">Categoria</InputLabel>
						<Select
							labelId="select-label"
							id="simple-select"
							label="Categoria">

							<NavLink
								className={({ isActive }) =>
									isActive ? 'active' : 'inactive'}
								to='/'>
								
								<MenuItem>
									Todos los Mates
								</MenuItem>
							</NavLink>

							<NavLink
								className={({ isActive }) =>
									isActive ? 'active' : 'inactive'}
								to='/category/natural'>
								
								<MenuItem>
									Natural Wood
								</MenuItem>
							</NavLink>

							<NavLink
								className={({ isActive }) =>
									isActive ? 'active' : 'inactive'}
								to='/category/minimal'>
								
								<MenuItem>
									Minimalista
								</MenuItem>
							</NavLink>

							<NavLink
								className={({ isActive }) =>
									isActive ? 'active' : 'inactive'}
								to='/category/tematic'>

								<MenuItem>
									Tematico
								</MenuItem>
							</NavLink>

							<NavLink
								className={({ isActive }) =>
									isActive ? 'active' : 'inactive'}
								to='/customer'>
									
								<MenuItem>
									Personalizar
								</MenuItem>
							</NavLink>
						</Select>
					</FormControl>
				</Box>
				<li>
					<input type='search' placeholder='Buscar' /> <span>Buscar</span>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;