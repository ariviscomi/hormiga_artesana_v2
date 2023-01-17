class product {
	constructor(id, title, image, description, price, stock) {
		this.id = id;
		this.title = title;
		this.img = image;
		this.desc = description;
		this.price = price;
		this.stock = stock;
	};
};

const prod1 = new product(1, "Mate Montañas", "./images/montaña.jpeg","Mate de algarrobo con diseño de montañas", 500, 4);
const prod2 = new product(2, "Mate Futbol", "./images/futbol.jpeg","Mate de algarrobo con escudo de equipo de futbol a eleccion", 600, 7);
const prod3 = new product(3, "Mate Argento", "./images/argentina.jpeg","Mate de algarrobo con motivo de Argentina", 400, 5);
const prod4 = new product(4, "Mate Minimal","./images/minimal.jpeg", "Mate de algarrobo con diseño minimalista", 450, 8);
const prod5 = new product(5, "Mate Mandala","./images/mandala.jpeg", "Mate de algarrobo con diseño de Mandalas", 500, 7);
const prod6 = new product(6, "Mate Pets", "./images/pets.jpeg", "Mate de algarrobo con diseño de tu mascota", 650, 3);

const PRODS = [
	prod1,
	prod2,
	prod3,
	prod4,
	prod5,
	prod6
];

const getProductos = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(PRODS);
	}, 2000);
});



export default getProductos;