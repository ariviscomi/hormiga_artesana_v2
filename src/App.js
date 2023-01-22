import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/Header';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
//import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {

	return (
		<>
			<Header/>
			<ItemListContainer/>
		</>
	); 
};

export default App;