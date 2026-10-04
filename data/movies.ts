export type Movie = {
  id: string;
  title: string;
  year: string;
  genre: string;
  rating: string;
  duration: string;
  poster: string;
  backdrop: string;
  description: string;
  featured?: boolean;
};

const poster = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=85`;
const backdrop = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

export const movies: Movie[] = [
  {
    id: 'virsa-01',
    title: 'Punjabi Classics',
    year: '2026',
    genre: 'Classic',
    rating: '8.7',
    duration: '2h 08m',
    poster: poster('photo-1518837695005-2083093ee35b'),
    backdrop: backdrop('photo-1518837695005-2083093ee35b'),
    description: 'A curated place for Punjabi cinema discovery. Replace this demo entry with an official movie listing and its authorized YouTube video.',
    featured: true,
  },
  {
    id: 'virsa-02',
    title: 'Rang Punjab',
    year: '2025',
    genre: 'Drama',
    rating: '8.3',
    duration: '2h 16m',
    poster: poster('photo-1516979187457-637abb4f9353'),
    backdrop: backdrop('photo-1516979187457-637abb4f9353'),
    description: 'A premium placeholder title for the VIRSA catalog. Official content links can be added later.',
  },
  {
    id: 'virsa-03',
    title: 'Saanjh',
    year: '2024',
    genre: 'Romance',
    rating: '8.1',
    duration: '1h 58m',
    poster: poster('photo-1489599849927-2ee91cede3ba'),
    backdrop: backdrop('photo-1489599849927-2ee91cede3ba'),
    description: 'Demo catalog content for the first VIRSA interface build.',
  },
  {
    id: 'virsa-04',
    title: 'Pind Stories',
    year: '2023',
    genre: 'Drama',
    rating: '7.9',
    duration: '2h 02m',
    poster: poster('photo-1485846234645-a62644f84728'),
    backdrop: backdrop('photo-1485846234645-a62644f84728'),
    description: 'Demo catalog content for the first VIRSA interface build.',
  },
  {
    id: 'virsa-05',
    title: 'Mehfil',
    year: '2022',
    genre: 'Comedy',
    rating: '8.0',
    duration: '1h 52m',
    poster: poster('photo-1500530855697-b586d89ba3ee'),
    backdrop: backdrop('photo-1500530855697-b586d89ba3ee'),
    description: 'Demo catalog content for the first VIRSA interface build.',
  },
];

export const featuredMovie = movies[0];
export const trendingMovies = movies.slice(1, 4);
export const latestMovies = movies.slice(2, 5);