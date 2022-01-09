import { Product } from 'components/Product'
import products from 'assets/products/mock.json';
import './styles.css'
export function ListProducts() {

    return(
        <div className = "container">
            {
                products.map(({ imgProduct, nameProduct, priceProduct, id }) => (

                    <Product  
                        key = { id }
                        imgProduct = { imgProduct } 
                        nameProduct = { nameProduct } 
                        price = { priceProduct }
                    />
                ))
            }
        </div>
    )
}
