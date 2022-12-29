import './App.css';
//import ClassComponent from './components/ClassComponent';
//import FunctionComponent from './components/FunctionComponent';
import CartWidget from './components/CartWidget';

function App() {

	const className = "Clase";
	const functionName = "Funcion";
	return (
		<div className="App">
			<header className="App-header">
				<CartWidget/>
			</header>
		</div>
	);
}

export default App;
