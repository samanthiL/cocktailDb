import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import SearchBar from './pages/SearchBar';
import './App.css';

class App extends Component {
render() {
	return (
		<div className="App">
			    <Router>

		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/favorite/:mode' element={< Favorite />}></Route>
				 <Route exact path='/searchBar/:mode' element={< SearchBar />}></Route>		</Routes>
		    </Router>

		</div>
);
}
}

export default App;
