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
  youtubeId?: string;
};

const poster = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=85`;
const backdrop = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`;

export const movies: Movie[] = [
  {
    id: 'virsa-01',
    title: 'Dulla Vaily',
    year: '2026',
    genre: 'Action',
    rating: '8.4',
    duration: '2h 10m',
    poster: poster('photo-1518837695005-2083093ee35b'),
    backdrop: backdrop('photo-1518837695005-2083093ee35b'),
    description: 'Official full Punjabi movie presented on the verified Shemaroo Punjabi YouTube channel.',
    featured: true,
    youtubeId: 'MyzCNmZvVvs',
  },
  {
    id: 'virsa-02',
    title: 'The Journey of Punjab',
    year: '2016',
    genre: 'Drama',
    rating: '8.3',
    duration: '2h 16m',
    poster: poster('photo-1516979187457-637abb4f9353'),
    backdrop: backdrop('photo-1516979187457-637abb4f9353'),
    description: 'Official full Punjabi movie presented by Lokdhun Punjabi on YouTube.',
    youtubeId: 'PAEMzGrjifw',
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
    description: 'Demo catalog entry — replace with an authorized YouTube movie before publishing.',
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
    description: 'Demo catalog entry — replace with an authorized YouTube movie before publishing.',
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
    description: 'Demo catalog entry — replace with an authorized YouTube movie before publishing.',
  },
];

export const featuredMovie = movies[0];
export const trendingMovies = movies.slice(1, 4);
export const latestMovies = movies.slice(2, 5);