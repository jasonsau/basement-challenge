import { CartItem } from './CartItem'
import { useEffect, useState } from 'react'; 
import './styles.css'
export function Cart() {

    const [ cart, setCart ] = useState([]);

    useEffect(() =>{
        setCart(JSON.parse(window.localStorage.getItem('cart')));
        console.log(cart);
    }, [setCart])

    return (
        <div className = "cart">
            <h2 className = "cart__title">YOUR <span className = "cart__title--dark">CART</span></h2>
            
            <div className = "cart__main">
                {
                    !cart ? <p>vacio</p>:
                    cart.map((item) => {
                        return <CartItem item = { item } key = {item.id}/>
                    })
                }
            </div>
            <div className = "cart__footer">
                <div className = "cart__option">
                    TOTAL: $37.50
                </div>
                <button className = "cart__checkout">
                    CHECKOUT
                </button>
            </div>
        </div>
    ) 
}

