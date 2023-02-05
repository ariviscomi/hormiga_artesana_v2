import React from 'react';
import ItemCount from '../count/ItemCount';

const ItemDetail = ({prod}) => {

	let urlImg = prod.img;

	return (
		<div id={prod.id} className='itemDetail'>
			<div>
				<h3>{prod.title}</h3>
			</div>
			<div className='prodDetailImg'>
				<img src={urlImg} alt="imagen del producto" />
			</div>
			<div className='prodDetailDesc'>
				<p>{prod.desc}</p>
			</div>
			<div className='prodDetailDesc'>
				<span>Precio: ${prod.price}</span>
			</div>
			<ItemCount/>
		</div>
	);
}

export default ItemDetail;