import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import SearchBar from './pages/SerachBar';

function App() {
  return (
    <Provider store={store}>
      <div>
		 <Router>

	<Routes> 
		 <Route exact path='/' element={< Home />}></Route>
			<Route exact path='/favorite' element={< Favorite />}></Route>
				 <Route exact path='/searchBar/:mode' element={< SearchBar />}></Route>  
         
	 </Routes>

     </Router> 
	  </div>
	  
    </Provider>
  );
}

export default App;
