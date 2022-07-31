import './App.css';
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import { pelicula } from './peliculas/peliculas.model';

function App() {
  const peliculaPrueba : pelicula = {
    id: 1, titulo: 'The Amazong Spiderman', 
    poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_FMjpg_UX1000_.jpg'
  }
  return (
 <>
  <PeliculaIndividual pelicula={peliculaPrueba}/>
 </>
  );
}

export default App;
