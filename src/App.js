import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './styles/css/style.css';

import Header from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Custom from './components/customize/Custom';

import CartProvider from './context/cartProvider';

function App() {

	return (
		<BrowserRouter>

			<Header />

			<CartProvider>

				<NavBar />
				<main>
					<Routes>
						<Route path='/' element={<ItemListContainer />} />
						<Route path='category/:category' element={<ItemListContainer />} />
						<Route path='item/:id' element={<ItemDetailContainer />} />
						<Route path='customer/' element={<Custom />} />
					</Routes>
				</main>

			</CartProvider>

			<Footer />

		</BrowserRouter>
	);
}

export default App;