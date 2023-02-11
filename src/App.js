import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import Header from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Custom from './components/customize/Custom';

import { cartContext } from './context/cartContext';

function App() {

	const [carrito, setCarrito] = useState(10)

	return (
		<cartContext.Provider value={carrito}>
			<BrowserRouter>
				<Header/>
				<NavBar />
				<main>
					<Routes>
						<Route path='/' element={<ItemListContainer />} />
						<Route path='category/:category' element={<ItemListContainer />} />
						<Route path='item/:id' element={<ItemDetailContainer />} />
						<Route path='customer/' element={<Custom />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</cartContext.Provider>
	);
};

export default App;