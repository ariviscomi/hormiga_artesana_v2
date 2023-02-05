import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { Header } from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import Custom from './components/customize/Custom';

function App() {

	return (
		<BrowserRouter>
			<Header/>
			<NavBar/>
			<main>
				<Routes>
					<Route path='/' element={<ItemListContainer/>} />
					<Route path='category/:category' element={<ItemListContainer/>} />
					<Route path='item/:id' element={<ItemDetailContainer/>} />
					<Route path='customer/' element={<Custom/>} />
				</Routes>
			</main>
			<Footer/>
		</BrowserRouter>
	); 
};

export default App;