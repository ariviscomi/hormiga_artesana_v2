import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';

const ItemCount = () => {

	const [count, setCount] = useState(0);

	return (
		<div className='countContainer'>
			<ButtonGroup
				className='countBtnGroup'
				disableElevation
				size='small'
				variant="contained"
				aria-label="Disabled elevation buttons">
				<Button className='countBtn'>-</Button>
				<span className='count'>{count}</span>
				<Button className='countBtn'>+</Button>
			</ButtonGroup>
			<Button className='sendCart' variant='contained'>Agregar al Carrito</Button>
		</div>
	)
}

export default ItemCount;