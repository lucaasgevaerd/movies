export type Movies = {
  price: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type Movie = {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  genre_ids: [];
  price: number;
  release_date: string;
}

export type Genres = {
  id: number;
  name: string;
}

export const genreList: Genres[] = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'AdventureAction' },
  { id: 16, name: 'AnimationAction' },
  { id: 35, name: 'ComedyAction' },
  { id: 80, name: 'CrimeAction' },
  { id: 99, name: 'DocumentaryAction' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'ScienceFiction' },
  { id: 10770, name: 'TVMovie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
]