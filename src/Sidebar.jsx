import CommingSoon from './assets/icons/commingSoon.svg';
import Favourite from './assets/icons/favourite.svg';
import NewRelease from './assets/icons/newRelease.svg';
import Trending from './assets/icons/trending.svg';
import WatchLater from './assets/icons/watchLater.svg';

export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a
                        className="bg-primary flex items-center space-x-2 rounded-lg px-5 py-3.5 text-black"
                        href="#"
                    >
                        <img src={Trending} width={24} height={24} alt="" />
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 rounded-lg px-5 py-3.5"
                        href="#"
                    >
                        <img src={NewRelease} width={24} height={24} alt="" />
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 rounded-lg px-5 py-3.5"
                        href="#"
                    >
                        <img src={CommingSoon} width={24} height={24} alt="" />
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 rounded-lg px-5 py-3.5"
                        href="#"
                    >
                        <img src={Favourite} width={24} height={24} alt="" />
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center space-x-2 rounded-lg px-5 py-3.5"
                        href="#"
                    >
                        <img src={WatchLater} width={24} height={24} alt="" />
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}
