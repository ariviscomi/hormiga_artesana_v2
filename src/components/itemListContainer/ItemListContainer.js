import ItemList from './ItemList';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//* Lista de Productos
const PRODS = [
	{ id: '0', category: "tematic", title: "Mate Montañas", img:"images/montaña.jpeg", desc: "Mate de algarrobo con diseño de montañas", price: 900, stock:10 },
	{ id: '1', category: "tematic", title: "Mate Futbol", img:"images/futbol.jpeg", desc: "Mate de algarrobo con escudo de equipo de futbol a eleccion", price: 900, stock:10 },
	{ id: '2', category: "tematic", title: "Mate Argento", img:"images/argentina.jpeg", desc: "Mate de algarrobo con motivo de Argentina", price: 900, stock:10 },
	{ id: '3', category: "minimal", title: "Mate Minimal 1", img:"images/minimal.jpeg", desc: "Mate de algarrobo con diseño minimalista", price: 700, stock:10 },
	{ id: '4', category: "tematic", title: "Mate Mandala", img:"images/mandala.jpeg", desc: "Mate de algarrobo con diseño de Mandalas", price: 800, stock:10 },
	{ id: '5', category: "tematic", title: "Mate Pets", img:"images/pets.jpeg", desc: "Mate de algarrobo con diseño de tu mascota", price: 900, stock:10 },
	{ id: '6', category: "minimal", title: "Mate Minimal 2", img:"images/minimalista1.jpg", desc: "Mate de algarrobo con diseño minimalista", price: 700, stock:10 },
	{ id: '7', category: "minimal", title: "Mate Minimal 3", img:"images/minimalista2.jpg", desc: "Mate de algarrobo con diseño minimalista", price: 700, stock:10 },
	{ id: '8', category: "natural", title: "Mate Madera Natural 1", img:"images/madera_natural1.jpg", desc: "Mate de algarrobo al natural, laqueado brillante", price: 600, stock:10 },
	{ id: '9', category: "natural", title: "Mate Madera Natural 2", img:"images/madera_natural2.jpg", desc: "Mate de algarrobo al natural, laqueado brillante", price: 600, stock:10 }
];

const ItemListContainer = () => {

	const [products, setProducts] = useState([]);
	const { category } = useParams();

	const getProducts = new Promise((resolve) => {
		setTimeout(() => {
			resolve(PRODS);
		}, 500);
	});

	useEffect(() => {

		if (category) {
			const filterProducts = PRODS.filter((prod) => prod.category === category);
			setProducts(filterProducts);
		}
		else {
			getProducts
				.then((response) => {
					setProducts(response);
				})

				.catch(error => console.log(error));
		}

	}, [category]);

	return (
		<section id="itemListContainer">
			<ItemList PRODS={products} />
		</section>
	)
};

export default ItemListContainer;