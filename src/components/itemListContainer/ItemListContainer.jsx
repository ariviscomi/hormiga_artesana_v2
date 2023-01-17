import './_itemList.css';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

//* Lista de Productos
const PRODS = [
	{ id: 1, title: "Mate Montañas", img: "./images/montaña.jpeg", desc: "Mate de algarrobo con diseño de montañas", price: 500 },
	{ id: 2, title: "Mate Futbol", img: "./images/futbol.jpeg", desc: "Mate de algarrobo con escudo de equipo de futbol a eleccion", price: 600 },
	{ id: 3, title: "Mate Argento", img: "./images/argentina.jpeg", desc: "Mate de algarrobo con motivo de Argentina", price: 400 },
	{ id: 4, title: "Mate Minimal", img: "./images/minimal.jpeg", desc: "Mate de algarrobo con diseño minimalista", price: 450 },
	{ id: 5, title: "Mate Mandala", img: "./images/mandala.jpeg", desc: "Mate de algarrobo con diseño de Mandalas", price: 500 },
	{ id: 6, title: "Mate Pets", img: "./images/pets.jpeg", desc: "Mate de algarrobo con diseño de tu mascota", price: 650 }
];

const ItemListContainer = () => {

	const [products, setProducts] = useState([]);

	const getProducts = new Promise((resolve) => {
		setTimeout(() => {
			resolve(PRODS);
		}, 2000);
	});

	useEffect(() => {
		getProducts
			.then((response) => {
				console.log(response);
				setProducts(response);
			})

			.catch(error => console.log(error))
	});

	return (
		<section id="itemListContainer">
			<ItemList PRODS={products}/>
		</section>
	);
};

export default ItemListContainer;