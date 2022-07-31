import './App.css';
import ListadoPeliculas from './peliculas/ListadoPeliculas';
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import { pelicula } from './peliculas/peliculas.model';

function App() {
  const peliculasEncartelera: pelicula[] = [
    {
      id: 1, titulo: 'The Amazing Spiderman', 
      poster: 'https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_FMjpg_UX1000_.jpg'
    },
    {
      id: 2, titulo: 'Spiderman 2', 
      poster: 'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg'
    }
  ]

  const peliculasProximosEstrenos: pelicula[] = [
    {
      id: 3, titulo: 'Soul 2', 
      poster: 'https://m.media-amazon.com/images/M/MV5BNTdiNTJmMzktZmE2MC00OWUxLWE1MjktMTdhN2Q1OWNlODY1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg'
    }
  ]


  // const peliculaPrueba : pelicula = {
  //   id: 1, titulo: 'The Amazong Spiderman', 
  //   poster: 'https://m.media-amazon.com/images/M/MV5BNTdiNTJmMzktZmE2MC00OWUxLWE1MjktMTdhN2Q1OWNlODY1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg'
  // }
  return (
 <>
 <h3>En Cartelera</h3>
 <ListadoPeliculas peliculas={peliculasEncartelera}/>
 <h3>Proximos Estrenos</h3>
 <ListadoPeliculas peliculas={peliculasProximosEstrenos}/>
 </>
  );
}

export default App;
