import React, {useState} from 'react';

import ItemCount from '../count/ItemCount';

const ItemDetail = ({prod}) => {

	const [count, setCount] = useState(1);

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
				<span>Stock: {prod.stock}</span>
				<span>Precio: ${prod.price}</span>
			</div>
			<ItemCount count={count} stock={prod.stock} setCount={setCount}/>
		</div>
	);
}

export default ItemDetail;