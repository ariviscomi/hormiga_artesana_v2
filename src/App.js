import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {

	return (
		<div className="App">
			<header>
				<NavBar/>
				<ItemListContainer/>
			</header>
		</div>
	);
}

export default App;
