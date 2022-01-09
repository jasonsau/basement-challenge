export function CartItem({item}) {

    return (
        <div className = "cart__item">
            <div className = "cart__item--first">
                <img 
                    src = { item.imgProduct } 
                    alt = "icon-product" 
                    className = "item__img"
                />
            </div>
            <div className = "cart__item--second">
                <h2 className = "item__name">{ item.nameProduct }</h2>
                <span className = "item__description">{ item.descriptionProduct }</span>
                <div className = "cart__selects">
                    <div className = "cart__select">
                        <label htmlFor = "input-number" className = "cart__label">
                            QUANTITY:
                        </label>
                        <input 
                            type = "number" 
                            id = "input-number" 
                            min = "1" 
                            className = "cart__input"
                            value = { item.quantityProduct }
                        />
                    </div>
                    <div className = "cart__size">
                        <label className = "cart__label">
                            SIZE:
                        </label>
                        <div>
                            <label htmlFor = "S" className = "cart__label">S</label>
                            <input 
                                type = "radio" 
                                id = "S" 
                                className = "cart__label" 
                                name = "size"
                                value = "s"
                            />
                        </div>
                        <div>
                            <label htmlFor = "M" className = "cart__label">M</label>
                            <input 
                                type = "radio" 
                                id = "M" 
                                className = "cart__label"  
                                name = "size"
                                value = "m"
                            />
                        </div>
                        <div>
                            <label htmlFor = "L" className = "cart__label" >L</label>
                            <input 
                                type = "radio" 
                                id = "L" 
                                className = "cart__label" 
                                name = "size"
                                value = "l"
                            />
                        </div>
                        <div>
                            <label htmlFor = "XL" className = "cart__label">XL</label>
                            <input 
                                type = "radio" 
                                id = "XL" 
                                name = "size"
                                value = "xl"
                            />
                        </div>
                    </div>
                </div>
                <div className = "cart__price">
                    <span >{ item.priceProduct }</span>
                </div>
            </div>
        </div>
    )
}
