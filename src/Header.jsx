import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Moon from './assets/icons/moon.svg';
import Ring from './assets/icons/ring.svg';
import Cart from './assets/icons/shopping-cart.svg';
import Sun from './assets/icons/sun.svg';
import Logo from './assets/images/logo.svg';
import CartDetails from './cinema/CartDetails';
import { MovieContext } from './contexts';

export default function Header({ darkMode, onDarkModeSwitch }) {
    const [showCart, setShowCart] = useState(false);

    const { cartData, dispatch } = useContext(MovieContext);

    function handleCartClose(e) {
        e.preventDefault();
        setShowCart(false);
    }

    function handleRemoveFromCart(e, movie) {
        e.preventDefault();

        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                ...movie,
            },
        });

        toast.error('Movie removed from the cart!', {
            position: 'top-right',
        });
    }

    return (
        <>
            {showCart && (
                <CartDetails
                    onCartClose={handleCartClose}
                    onRemoveFromCart={handleRemoveFromCart}
                />
            )}
            <header>
                <nav className="container flex items-center justify-between space-x-10 py-6">
                    <a href="index.html">
                        <img src={Logo} width={139} height={26} alt="" />
                    </a>
                    <ul className="flex items-center space-x-5">
                        <li>
                            <a
                                className="inline-flex rounded-lg bg-primary/20 p-1 backdrop-blur-[2px] dark:bg-primary/[7%]"
                                href="#"
                            >
                                <img src={Ring} width={24} height={24} alt="" />
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={onDarkModeSwitch}
                                className="inline-flex rounded-lg bg-primary/20 p-1 backdrop-blur-[2px] dark:bg-primary/[7%]"
                                href="#"
                            >
                                <img
                                    src={darkMode ? Sun : Moon}
                                    width={24}
                                    height={24}
                                    alt="Dark Mode Switch"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowCart(!showCart);
                                }}
                                className="inline-flex items-center rounded-lg bg-primary/20 p-1 backdrop-blur-[2px] dark:bg-primary/[7%]"
                                href="#"
                            >
                                <span className="text-sm text-primary">
                                    {cartData.length}
                                </span>
                                <img src={Cart} width={24} height={24} alt="" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
