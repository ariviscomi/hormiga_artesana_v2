import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const ItemCount = ({count,stock, setCount}) => {

	const suma = () => (count+1 <= stock) ? setCount(count + 1) : false;
	const resta = () => (count-1 >= 0) ? setCount(count - 1) : false;
	
	return (
		<div className='countContainer'>

			<ButtonGroup
				className='countBtnGroup'
				disableElevation
				size='small'
				variant="contained"
				aria-label="Disabled elevation buttons">

				<Button 
					onClick={resta} 
					className='countBtn'>
						-
				</Button>
				
				<input
					type='text'
					className='count'
					placeholder={count}
				/>
				
				<Button 
					onClick={suma}
					className='countBtn'>
						+
				</Button>

			</ButtonGroup>

			<Button 
				className='sendCart'
				variant='contained'>
					Agregar al Carrito
			</Button>
		</div>
	)
}

export default ItemCount;