import React from 'react';
import { Link } from 'react-router-dom';

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
							<MenuItem value={'all'}>Todos los Mates</MenuItem>
							<MenuItem value={'natural'}>Natural Wood</MenuItem>
							<MenuItem value={'minimal'}>Minimalista</MenuItem>
							<MenuItem value={'tematico'}>Tematico</MenuItem>
							<MenuItem value={'custom'}>Personalizar</MenuItem>
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