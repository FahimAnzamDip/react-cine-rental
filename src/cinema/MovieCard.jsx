import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Tag from '../assets/icons/tag.svg';
import Button from '../components/Button';
import Rating from '../components/Rating';
import { MovieContext } from '../contexts';
import { getImageUrl } from '../utils/cinema-utils';
import MovieDetailsModal from './MovieDetailsModal';

export default function MovieCard({ movie }) {
    const [showDetails, setShowDetails] = useState(false);

    const { cartData, dispatch } = useContext(MovieContext);

    function handleModalClose(e) {
        e.preventDefault();
        setShowDetails(!showDetails);
    }

    function handleAddToCart(e, movie) {
        e.preventDefault();
        e.stopPropagation();

        const movieExists = cartData.find((data) => data.id === movie.id);
        if (!movieExists) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    ...movie,
                },
            });

            toast.success('Movie added to the cart!', {
                position: 'top-right',
            });
        } else {
            toast.warn('Movie already exists in the cart!', {
                position: 'top-right',
            });
        }
    }

    return (
        <>
            {showDetails && (
                <MovieDetailsModal
                    movie={movie}
                    onModalClose={handleModalClose}
                    onAddToCart={handleAddToCart}
                />
            )}
            <figure
                onClick={() => setShowDetails(!showDetails)}
                className="cursor-pointer rounded-xl border border-black/10 p-4 shadow-sm dark:border-white/10"
            >
                <img
                    className="w-full object-cover"
                    src={getImageUrl(movie.cover)}
                    alt={movie.title}
                />
                <figcaption className="pt-4">
                    <h3 className="mb-1 text-xl">{movie.title}</h3>
                    <p className="mb-2 text-sm text-[#575A6E]">{movie.genre}</p>
                    <Rating value={movie.rating} />
                    <Button onSmash={(e) => handleAddToCart(e, movie)}>
                        <img src={Tag} alt="Tag" />
                        <span>${movie.price} | Add to Cart</span>
                    </Button>
                </figcaption>
            </figure>
        </>
    );
}
