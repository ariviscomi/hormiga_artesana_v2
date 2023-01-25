import React from 'react';
const Item = ({ prod }) => {
	return (
		<div id={prod.id} className='prod'>
			<div>
				<h3>{prod.title}</h3>
			</div>
			<div>
				<img src={prod.img} alt="imagen del producto" />
			</div>
			<div className='prodDesc'>
				<p>{prod.desc}</p>
			</div>
			<div className='prodPrice'>
				<span>Precio: ${prod.price}</span>
			</div>
		</div>
	);
};

export default Item;