
import { CartItem } from './CartItem'
import './styles.css'
export function Cart() {

    return (
        <div className = "cart">
            <h2 className = "cart__title">YOUR <span className = "cart__title--dark">CART</span></h2>
            
            <div className = "cart__main">
                <CartItem />
                <CartItem />
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

