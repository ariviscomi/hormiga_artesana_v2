import Item from "./Item";
const ItemList = ({PRODS}) => {
  return (
	<>
		<ul>
			{PRODS.map((item) => {
				return(
					<Item key={item.id} prod={item}/>
				)
			})}
		</ul>
	</>
  );
};

export default ItemList;