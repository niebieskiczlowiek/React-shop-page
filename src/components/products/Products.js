import './Products.css'
const Products = (props) => {
    const category = props.itemCategory;

    return (
        <div>
            <div className="products-container">
                <div className="categories">
                    <button className="button" onClick={() => props.category('all')}>All</button>
                    <button className="button" onClick={() => props.category('Relaksacja')}>Relakascja</button>
                    <button className="button" onClick={() => props.category('Uzytek')}>Uzytek</button>
                    <button className="button" onClick={() => props.category('Jedzenie')}>Jedzenie</button>
                    <button className="button" onClick={() => props.category('Higiena')}>Higiena</button>
                </div>
                {category.map((product) => <div className='wholeItem'>

                    <div className='mainItem'>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>{product.price} PLN</p>
                        <p>{product.promoPrice
                            ? `Cena promocyjna: ${product.promoPrice} PLN`
                            : `No promo price`} </p>
                        <p>{product.promoPrice
                            ? `Zaoszczedzasz: ${(product.price - product.promoPrice).toFixed(1)} PLN`
                            : ``} </p>
                        <button className="button" onClick={() => props.setCart(product)}>Add to cart</button>
                    </div>

                    <div className='itemImage'>
                        <img className="image" src={product.image} alt="item" />
                    </div>

                </div>)}
            </div>
        </div>
    )
}

export default Products;