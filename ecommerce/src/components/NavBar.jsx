import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav>
            <img src="/src/assets/logo.png" alt="Logo de la farmacia" />
            <h3>Ecommerce de Farmacia Perotti-Ricardi</h3>
            <div>
                <button>Protectores solares faciales</button>
                <button>Protectores solares corporales</button>
                <button>Protectores solares para bebes</button>
            </div>
            <CartWidget/>
        </nav>
    )
} 

export default NavBar;