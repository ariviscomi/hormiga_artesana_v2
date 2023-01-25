import React from 'react'

const ItemDetail = ({prod}) => {
	return (
		<div id={prod.id} className='itemDetail'>
			<div>
				<h3>{prod.title}</h3>
			</div>
			<div className='prodDetailImg'>
				<img src={prod.img} alt="imagen del producto" />
			</div>
			<div className='prodDetailDesc'>
				<p>{prod.desc}</p>
			</div>
			<div className='prodDetailDesc'>
				<span>Precio: ${prod.price}</span>
			</div>
		</div>
	)
}

export default ItemDetail;