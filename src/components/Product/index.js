import { useRef } from 'react';
import prods from 'assets/products/mock.json';
import './styles.css';
export function Product({ imgProduct = `assets/img/products/shirt.png`, 
    nameProduct = "Black t-shirt", 
    price = "$7.95",
    id = 1}) {

    const idRef = useRef();
    const handleClick = () => {
        const pro = prods.find((prod) => prod.id === parseInt(idRef.current.getAttribute('valueid')));
        const productCar = {
            id: pro.id,
            nameProduct: pro.nameProduct,
            descriptionProduct: pro.description,
            quantityProduct: 1,
            size: "s",
            priceProduct: pro.priceProduct,
            imgProduct: pro.imgProduct
        };
        if(!window.localStorage.getItem('cart')){
            window.localStorage.setItem('cart', JSON.stringify([productCar]));
        } else {
            const products = JSON.parse(window.localStorage.getItem('cart'));
            products.push(productCar);
            window.localStorage.setItem('cart', JSON.stringify(products));
        }
    }

    return (
        <section 
            className = "product" 
            valueid = { id } 
            ref = { idRef }
            onClick = { handleClick }
        >
            <div className = "product__cart">
                <span className = "product__span">ADD TO CART</span>
            </div>
            <img  src = { imgProduct } alt = "img-product" className = "product__img"/>
            <div className = "product__options">
                <p className = "product__text">{ nameProduct }</p>
                <p className = "product__text">{ price }</p>
            </div>
        </section>
    );
}
