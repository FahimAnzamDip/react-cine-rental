import { useContext } from 'react';
import Checkout from '../assets/icons/checkout.svg';
import Delete from '../assets/icons/delete.svg';
import { MovieContext } from '../contexts';
import { getImageUrl } from '../utils/cinema-utils';

function CartItem({ item, onRemoveFromCart }) {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-4">
            <div className="flex items-center gap-4">
                <img
                    className="w-20 overflow-hidden rounded"
                    src={getImageUrl(item.cover)}
                    alt={item.title}
                />
                <div>
                    <h3 className="text-base font-bold md:text-xl">
                        {item.title}
                    </h3>
                    <p className="text-[#575A6E] max-md:text-xs">
                        {item.genre}
                    </p>
                    <span className="max-md:text-xs">${item.price}</span>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4">
                <button
                    onClick={(e) => onRemoveFromCart(e, item)}
                    className="inline-flex items-center space-x-2 rounded-md bg-[#D42967] p-2 text-white md:px-4"
                >
                    <img className="h-5 w-5" src={Delete} alt="Delete" />
                    <span className="max-md:hidden">Remove</span>
                </button>
            </div>
        </div>
    );
}

export default function CartDetails({ onCartClose, onRemoveFromCart }) {
    const { cartData, setCartData } = useContext(MovieContext);

    return (
        <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/60 backdrop-blur-sm">
            <div className="absolute left-1/2 top-1/2 max-h-[90vh] w-full max-w-[420px] -translate-x-1/2 -translate-y-1/2 overflow-auto p-4 sm:max-w-[600px] lg:max-w-[790px]">
                <div className="overflow-hidden rounded-2xl bg-white p-5 shadow-md dark:bg-[#12141D] md:p-9">
                    <h2 className="mb-10 text-2xl font-bold lg:text-[30px]">
                        Your Carts
                    </h2>
                    <div className="mb-10 max-h-[450px] space-y-8 overflow-auto lg:mb-14 lg:space-y-12">
                        {cartData.length > 0 ? (
                            cartData.map((data) => (
                                <CartItem
                                    key={data.id}
                                    item={data}
                                    onRemoveFromCart={onRemoveFromCart}
                                />
                            ))
                        ) : (
                            <p className="text-xl font-medium text-red-500">
                                No items in the cart!
                            </p>
                        )}
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <a
                            className="inline-flex items-center space-x-2 rounded-md bg-primary p-2 text-sm text-[#171923] md:px-4"
                            href="#"
                        >
                            <img src={Checkout} width="24" height="24" alt="" />
                            <span>Checkout</span>
                        </a>
                        <a
                            onClick={onCartClose}
                            className="flex items-center justify-center gap-2 rounded-lg border border-[#74766F] px-5 py-2 text-sm font-semibold text-[#6F6F6F] dark:text-gray-200"
                            href="#"
                        >
                            Cancel
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
