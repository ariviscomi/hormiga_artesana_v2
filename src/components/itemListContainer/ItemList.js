import React from 'react';
import Item from "./Item";
import { Link } from 'react-router-dom';
const ItemList = ({PRODS}) => {
  return (
	<>
		<ul>
			{PRODS.map((item) => {
				return(
					<Link to='/item' key={item.id}>
						<Item prod={item}/>
					</Link>
				)
			})}
		</ul>
	</>
  );
};

export default ItemList;