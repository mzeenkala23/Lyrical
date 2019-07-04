import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Search from './Containers/Search/Search'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import LyricPage from './Containers/LyricPage/LyricPage'


function App() {
  return (
    <div className="App">
        <Navbar />
        <Router>
           <Route exact path='/' component={Search} />
           <Route path='/songs-lyrics/:id' component={LyricPage} />
        </Router>  
    </div>
  );
}

export default App;
