import { useReducer, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { MovieContext, ThemeContext } from './contexts';
import Page from './Page';
import { CartReducer } from './reducers/CartReducer';

export default function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [cartData, dispatch] = useReducer(CartReducer, []);

    return (
        <>
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
                <MovieContext.Provider value={{ cartData, dispatch }}>
                    <Page />
                </MovieContext.Provider>
            </ThemeContext.Provider>

            <ToastContainer autoClose={1500} />
        </>
    );
}
