import { getAllMovies } from '../data/movies';
import MovieCard from './MovieCard';

const movies = getAllMovies();

export default function MovieList() {
    return (
        <div className="content">
            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
