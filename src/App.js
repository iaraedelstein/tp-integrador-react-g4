import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import PersonaList from './components/PersonaList';
import PersonaForm from './components/PersonaForm';
/*import PersonaLibros from './components/PersonaLibros'; */
import CategoriaList from './components/CategoriaList';
import CategoriaForm from './components/CategoriaForm';
/*import LibrosList from './components/LibrosList';
import LibroForm from './components/LibroForm'; */
import './App.css';

function App() {
    return ( <div className = "App" >
         < Router >
            < Route exact path = "/" component = { Home } />
            < Route exact path = "/persona" component = { PersonaList } />
            {/* En persona lista falta agregar los libros que tienen la persona prestados.*/} 
            < Route exact path = "/persona/new" component = { PersonaForm } />
            {/* <Route exact path="/persona/:id/libros" component={PersonaLibros} /> */ }   
            < Route exact path = "/categoria" component = { CategoriaList } /> 
            < Route exact path = "/categoria/new" component = { CategoriaForm } /> 
            { /* < Route exact path = "/libro" component = { LibrosList } />
            < Route exact path = "/libro/new" component = { LibroForm } /> */ } 
        </Router>
         </div >
    );
}

export default App;