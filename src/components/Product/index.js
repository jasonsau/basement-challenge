import './styles.css';
export function Product({ src = `assets/img/products/shirt.png`, nameProduct = "Black t-shirt", price = "$7.95" }) {
    const img = require('assets/img/products/shirt.png');
    return (
        <section className = "product">
            <img  src = { img } alt = "img-product" className = "product__img"/>
            <div className = "product__options">
                <p className = "product__text">{ nameProduct }</p>
                <p className = "product__text">{ price }</p>
            </div>
        </section>
    );
}
