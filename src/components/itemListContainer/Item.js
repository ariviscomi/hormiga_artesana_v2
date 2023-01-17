const Item = (item) => {
  return (
	<div key={item.id}>
		<div>
			<h3>{item.title}</h3>
		</div>
							
		<div>
			<img src={item.img} alt="imagen del producto"/>
		</div>
						
		<div>
			<p>{item.desc}</p>
		</div>
							
		<div>
			<span>Precio: ${item.price}</span>
		</div>
	</div>
  );
};

export default Item;