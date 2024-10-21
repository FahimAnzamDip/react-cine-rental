import Tag from '../assets/icons/tag.svg';
import Button from '../components/Button';
import { getImageUrl } from '../utils/cinema-utils';

export default function MovieDetailsModal({
    movie,
    onModalClose,
    onAddToCart,
}) {
    return (
        <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/60 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 max-h-[90vh] w-full max-w-[420px] -translate-x-1/2 -translate-y-1/2 overflow-auto p-4 sm:max-w-[600px] lg:max-w-[984px]">
                <div className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-[#12141D] sm:grid sm:grid-cols-[2fr_1fr]">
                    <img
                        className="h-full w-full object-cover max-sm:max-h-[300px] sm:order-2"
                        src={getImageUrl(movie.cover)}
                        alt={movie.title}
                    />
                    <div className="p-5 lg:p-11">
                        <div className="">
                            <h2 className="mb-2 text-3xl font-bold leading-normal lg:text-[50px]">
                                {movie.title}
                            </h2>
                            <span className="my-3 block text-base text-[#9fa0a4] dark:text-[#575A6E]">
                                {movie.genre}
                            </span>
                            <div></div>
                        </div>
                        <p className="mb-8 text-sm lg:mb-16 lg:text-base">
                            {movie.description}
                        </p>
                        <div className="grid gap-2 lg:grid-cols-2">
                            <Button onSmash={(e) => onAddToCart(e, movie)}>
                                <img src={Tag} alt="Tag" />
                                <span>${movie.price} | Add to Cart</span>
                            </Button>
                            <Button
                                onSmash={onModalClose}
                                className="border border-[#74766F] bg-transparent text-[#6F6F6F] dark:text-gray-200"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
