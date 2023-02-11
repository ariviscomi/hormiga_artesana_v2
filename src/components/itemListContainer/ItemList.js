import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ItemCount from '../count/ItemCount';
import Item from "./Item";

const ItemList = ({ PRODS }) => {

	const [count, setCount] = useState(0);
	return (

		<ul>
			{PRODS.map((item) => {
				return (
					<div id={item.id} className='prod animate__animated animate__backInLeft'>
						<Link to={`item/${item.id}`} key={item.id}>
							<Item prod={item} />
						</Link>
						<ItemCount count={count} stock={item.stock} setCount={setCount} />
					</div>
				)
			})}
		</ul>

	);
};

export default ItemList;