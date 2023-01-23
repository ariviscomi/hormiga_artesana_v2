import React from 'react';
import Item from "./Item";
import { Link } from 'react-router-dom';
const ItemList = ({PRODS}) => {
  return (
	<>
		<ul>
			{PRODS.map((item) => {
				return(
					<Link to='/item'>
						<Item key={item.id} prod={item}/>
					</Link>
				)
			})}
		</ul>
	</>
  );
};

export default ItemList;