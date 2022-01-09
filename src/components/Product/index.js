import './styles.css';
export function Product({ imgProduct = `assets/img/products/shirt.png`, nameProduct = "Black t-shirt", price = "$7.95" }) {
    return (
        <section className = "product">
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
