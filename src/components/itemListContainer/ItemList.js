import Item from "./Item";
const ItemList = (PRODS) => {
  return (
	<>
		<ul>
			{PRODS.map((item) => (
				<Item item={item}/>
			))}
		</ul>
	</>
  );
};

export default ItemList;