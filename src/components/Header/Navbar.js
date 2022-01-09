import Modal from 'components/Modal';
import { Cart } from 'components/Cart';
import { useState } from 'react';
import logo from 'assets/img/logo.svg';
export function Navbar() {

    const [ showModal, setShowModal ] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <header className = "header">
                <img
                    src = { logo }
                    alt = "icon-header"
                />
                <button 
                    className = "header__button"
                    onClick = { handleClick }
                >
                    CART (0)
                </button>
            </header>
            { showModal? (<Modal onClose = { handleClose }><Cart /></Modal>): '' }
            
        </>
    );
}
