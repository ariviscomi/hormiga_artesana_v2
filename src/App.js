import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/header/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {

	return (
		<div className="App">
			<header className='header'>
				<NavBar/>
			</header>
			<main className='main'>
				<ItemListContainer/>
			</main>
		</div>
	);
}

export default App;
