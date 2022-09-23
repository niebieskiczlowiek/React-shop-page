import './Products.css'
const Products = (props) => {
    /*const products = props.products; */
    const category = props.itemCategory;

    return (
        <div>
            <h2 className="header2">Products</h2>
            <div className="categories">
                <button onClick={() => props.category('all')} className="category">All</button>
                <button onClick={() => props.category('Relaksacja')} className="category">Relakascja</button>
                <button onClick={() => props.category('Uzytek')} className="category">Uzytek</button>
                <button onClick={() => props.category('Jedzenie')} className="category">Jedzenie</button>
                <button onClick={() => props.category('Higiena')} className="category">Higiena</button>
            </div>
            <div className="products-container">
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