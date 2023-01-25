import React from 'react'
import { Link } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

//* Lista de Productos
const PRODS = [
	{ id: '0', title: "Mate Montañas", img: "images/montaña.jpeg", desc: "Mate de algarrobo con diseño de montañas", price: 500 },
	{ id: '1', title: "Mate Futbol", img: "images/futbol.jpeg", desc: "Mate de algarrobo con escudo de equipo de futbol a eleccion", price: 600 },
	{ id: '2', title: "Mate Argento", img: "images/argentina.jpeg", desc: "Mate de algarrobo con motivo de Argentina", price: 400 },
	{ id: '3', title: "Mate Minimal", img: "images/minimal.jpeg", desc: "Mate de algarrobo con diseño minimalista", price: 450 },
	{ id: '4', title: "Mate Mandala", img: "images/mandala.jpeg", desc: "Mate de algarrobo con diseño de Mandalas", price: 500 },
	{ id: '5', title: "Mate Pets", img: "images/pets.jpeg", desc: "Mate de algarrobo con diseño de tu mascota", price: 650 }
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