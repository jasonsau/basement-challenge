import logo from 'assets/img/logo.svg';
export function Navbar() {
    return (
        <header className = "header">
            <img
                src = { logo }
                alt = "icon-header"
            />
            <button className = "header__button">
                CART (0)
            </button>
        </header>
    );
}
