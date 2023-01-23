import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Footer from './components/footer/Footer';

function App() {

	return (
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path='/' element={<ItemListContainer/>} />
				<Route path='item' element={<ItemDetailContainer/>} />
			</Routes>
			<Footer/>
		</BrowserRouter>
	); 
};

export default App;