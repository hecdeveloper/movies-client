import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";

export default function ListadoPeliculas(props: listadoPeliculasProps) {
  return (
    <div>
      {props.peliculas.map((pelicula) => (
        <PeliculaIndividual pelicula={pelicula} key={pelicula.id} />
      ))}
    </div>
  );
}

interface listadoPeliculasProps {
  peliculas: pelicula[];
}
