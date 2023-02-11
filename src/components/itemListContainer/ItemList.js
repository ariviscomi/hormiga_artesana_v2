import React from 'react';
import { Link } from 'react-router-dom';

import Item from "./Item";

const ItemList = ({ PRODS }) => {

	return (

		<ul>
			{PRODS.map((item) => {
				return (
					<div id={item.id} className='prod animate__animated animate__backInLeft'>
						<Link to={`item/${item.id}`} key={item.id}>
							<Item prod={item} />
						</Link>
					</div>
				)
			})}
		</ul>

	);
};

export default ItemList;