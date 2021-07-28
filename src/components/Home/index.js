import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Página principal</h1>
      <Link to="/libro">Ver libros</Link>
      <br></br>
      <Link to="/categoria">Ver categorias</Link>
      <br></br>
      <Link to="/persona">Ver personas</Link>
    </div>
  );
}

export default Home;
