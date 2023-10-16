export interface Movies {
  id: number;
  title: string;
  poster: string | null;
  genre: string[];
  year: number,
  duration: number,
  imdbRating: number,
  actors: number[];
}

export interface Actors {
  id: number;
    first_name: string;
    last_name: string;
    gender: string;
    bornCity: string;
    birthdate: string;
    img: string;
    rating: number;
    movies: number[];
    nombre_completo: string;
}

export interface Estudio {
  id: number;
    name: string;
    country: string;
    createYear: number;
    employees: number;
    rating: number;
    movies: number[];
}
