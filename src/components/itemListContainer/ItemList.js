import Item from "./Item";
const ItemList = ({PRODS}) => {
  return (
	<>
		<ul>
			{PRODS.map((item) => (<Item prod={item}/> ))}
		</ul>
	</>
  );
};

export default ItemList;