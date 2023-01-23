import React from 'react'
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
  return (
	<div>
		<Link to='/'>
			<button>Volver</button>
		</Link>
		<h1>
			ItemDetail
		</h1>
	</div>
  )
}

export default ItemDetailContainer;