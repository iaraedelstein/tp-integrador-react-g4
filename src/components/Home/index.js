import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Home() {
  return (
    <div class="main-cont">
    <h1>Página principal</h1>
    <div class="cards-cont"> 
      <div class="card">
          <h2>Libros</h2>
          <Link to="/libro">Ver libros</Link>
          <Link to="/libro/new">Agregar libro</Link>
        </div>
        <div class="card">
          <h2>Personas</h2>
          <Link to="/persona">Ver personas</Link>
          <Link to="/persona/new">Agregar persona</Link>
        </div>
        <div class="card">
          <h2>Categorias</h2>
          <Link to="/categoria">Ver categorias</Link>
          <Link to="/categoria/new">Agregar categoria</Link>
        </div>
    </div>

    </div>

  );
}

export default Home;
