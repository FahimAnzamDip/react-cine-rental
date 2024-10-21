import { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import MovieList from './cinema/MovieList';
import { ThemeContext } from './contexts';
import cn from './utils/cn';

export default function Page() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    function handleDarkModeSwitch(e) {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div className={cn({ dark: darkMode })}>
            <div className="bg-white font-[Sora] text-dark dark:bg-body dark:text-white">
                <Header
                    darkMode={darkMode}
                    onDarkModeSwitch={handleDarkModeSwitch}
                />
                <main>
                    <div className="container grid gap-[3.5rem] lg:grid-cols-[218px_1fr]">
                        <Sidebar />
                        <MovieList />
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
}
