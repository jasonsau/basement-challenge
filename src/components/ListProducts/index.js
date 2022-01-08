import { Product } from 'components/Product'
import './styles.css'
export function ListProducts() {

    return(
        <div className = "container">
            <Product />
            <Product />
            <Product />
        </div>
    )
}
