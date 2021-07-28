import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { Button} from 'react-bootstrap';
import { Card} from 'react-bootstrap';

function Home() {
  return (
    <div class="main-cont">
      <nav class="main-nav">
        <h2>Where are my books?</h2>
        <img src="https://aga.frba.utn.edu.ar/wp-content/uploads/2017/07/logo-utn-frba.png"></img>
      </nav>
      <div class="presentation"></div>
      <div class="cards-cont">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Libros</Card.Title>
          <Card.Text>
            Ver, editar y administrar los libros y sus préstamos.
          </Card.Text>
          <div class="link-cont">
            <Link to="/libro" className="btn btn-primary">Ir a libros</Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Personas</Card.Title>
          <Card.Text>
            Ver y editar a las personas registradas y sus libros prestados.
          </Card.Text>
          <div class="link-cont">
            <Link to="/persona" className="btn btn-primary">Ir a personas</Link>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Body className="card-body">
          <Card.Title>Categorias</Card.Title>
          <Card.Text>
            Ver y editar las categorías de los libros.
          </Card.Text>
          <div class="link-cont">
            <Link to="/categoria" className="btn btn-primary">Ir a categorías</Link>
          </div>
        </Card.Body>
      </Card>
      </div>
      <footer>
        <h3>Tp Integrador Grupo 4</h3>
        <p class="names">
          Integrantes: Iara Edelstein, Jorge Rivera, Guillermo Dorfman, Mauro
          Lopez, Joel Nicolás Sartori, Lihuen Salerno
        </p>
      </footer>
    </div>
  );
}

export default Home;
