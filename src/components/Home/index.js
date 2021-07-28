import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Home() {
  return (
    <div class="main-cont">
      <nav class="main-nav"><h2>Where are my books?</h2><img src="https://aga.frba.utn.edu.ar/wp-content/uploads/2017/07/logo-utn-frba.png"></img></nav>
      <div class="presentation"></div>
      <div class="cards-cont"> 
        <div class="card">
          <h2>Libros</h2>
            <div class="links">
              <div class="link">
                <Link to="/libro" style={{ textDecoration: 'none' }}>Ver libros</Link>
              </div>
              <div class="link">
                <Link to="/libro/new" style={{ textDecoration: 'none' }}>Agregar libro</Link>
              </div>
            </div>
        </div>
        <div class="card">
          <h2>Personas</h2>
            <div class="links">
              <div class="link">
                <Link to="/persona" style={{ textDecoration: 'none' }}>Ver personas</Link>
              </div>
              <div class="link">
                <Link to="/persona/new" style={{ textDecoration: 'none' }}>Agregar persona</Link>
              </div>
            </div>
        </div>
        <div class="card">
          <h2>Categorias</h2>
            <div class="links">
              <div class="link">
                <Link to="/categoria" style={{ textDecoration: 'none' }}>Ver categorias</Link>
              </div>
              <div class="link">
                <Link to="/categoria/new" style={{ textDecoration: 'none' }}>Agregar categoria</Link>
              </div>
            </div>
        </div>
      </div>
      <footer>
        <h3>Tp Integrador Grupo 4</h3>
        <p class="names">Integrantes: 
        Iara Edelstein, 
        Jorge Rivera, 
        Guillermo Dorfman, 
        Mauro Lopez, 
        Joel Nicolás Sartori, 
        Lihuen Salerno
        </p>
</footer>
    </div>
  );
}

export default Home;