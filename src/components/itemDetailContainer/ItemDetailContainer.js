import React from 'react'
import { Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

//* Lista de Productos
const PRODS = [
	{ id: '0',category:"tematic", title: "Mate Montañas", img: "./images/montaña.jpeg", desc: "Mate de algarrobo con diseño de montañas", price: 900 },
	{ id: '1',category:"tematic", title: "Mate Futbol", img: "./images/futbol.jpeg", desc: "Mate de algarrobo con escudo de equipo de futbol a eleccion", price: 900 },
	{ id: '2',category:"tematic", title: "Mate Argento", img: "./images/argentina.jpeg", desc: "Mate de algarrobo con motivo de Argentina", price: 900 },
	{ id: '3',category:"minimal", title: "Mate Minimal 1", img: "./images/minimal.jpeg", desc: "Mate de algarrobo con diseño minimalista", price: 700 },
	{ id: '4',category:"tematic", title: "Mate Mandala", img: "./images/mandala.jpeg", desc: "Mate de algarrobo con diseño de Mandalas", price: 800 },
	{ id: '5',category:"tematic", title: "Mate Pets", img: "./images/pets.jpeg", desc: "Mate de algarrobo con diseño de tu mascota", price: 900 },
	{ id: '6',category:"minimal", title: "Mate Minimal 2", img: "./images/minimalista1.jpg", desc: "Mate de algarrobo con diseño minimalista", price: 700 },
	{ id: '7',category:"minimal", title: "Mate Minimal 3", img: "./images/minimalista2.jpg", desc: "Mate de algarrobo con diseño minimalista", price: 700 },
	{ id: '8',category:"natural", title: "Mate Madera Natural 1", img: "./images/madera_natural1.jpg", desc: "Mate de algarrobo al natural, laqueado brillante", price: 600 },
	{ id: '9',category:"natural", title: "Mate Madera Natural 2", img: "./images/madera_natural2.jpg", desc: "Mate de algarrobo al natural, laqueado brillante", price: 600 }
];

const ItemDetailContainer = () => {

	const {id} = useParams();
	return (
		<section id='itemDetailContainer'>
			<Link to='/'>
				<button>Volver</button>
			</Link>
			<ItemDetail prod={PRODS[id]} />
		</section>
	)
}

export default ItemDetailContainer;