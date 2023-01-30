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
							<MenuItem value={'all'}>
								<NavLink to='/'>
									Todos los Mates
								</NavLink>
							</MenuItem>
							<MenuItem value={'natural'}>
								<NavLink to='/category/natural'>
									Natural Wood
								</NavLink>
							</MenuItem>
							<MenuItem value={'minimal'}>
								<NavLink to='/category/minimal'>
									Minimalista
								</NavLink>
							</MenuItem>
							<MenuItem value={'tematic'}>
								<NavLink to='/category/tematic'>
									Tematico
								</NavLink>
							</MenuItem>
							<MenuItem value={'custom'}>
								<NavLink to='/customer'>
									Personalizar
								</NavLink>
							</MenuItem>
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