import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="bg-gray-100">
            <div className="container mx-auto flex justify-between items-center">
                <div className="p-6">
                    <Link to="/">
                        <img src="../src/assets/logo.png" className="w-40 h-auto" alt="Logo" />
                    </Link>
                </div>
                <div className="ml-20 flex items-center justify-center flex-grow">
                    <ul className="space-x-4 flex ml-auto text-gray-700">
                        <li>
                            <button className="font-semibold hover:text-customBlue">Promo protectores</button>
                        </li>
                        <li className="border-r pr-0"><span></span></li>
                        <li><CartWidget /></li>
                        <li className="border-r pr-0"><span></span></li>
                        <li><button className="hover:text-customBlue">Contacto</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
