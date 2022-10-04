import './Products.css'
const Products = (props) => {
    const category = props.itemCategory;

    return (
        <div>
            <div className="products-container">
                <div className="categories">
                    <button className="button" onClick={() => props.category('all')}>All</button>
                    <button className="button" onClick={() => props.category('Relaksacja')}>Relax</button>
                    <button className="button" onClick={() => props.category('Uzytek')}>Utility</button>
                    <button className="button" onClick={() => props.category('Jedzenie')}>Food</button>
                    <button className="button" onClick={() => props.category('Higiena')}>Hygiene</button>
                </div>
                
                <h2>{category.length
                        ? ``
                        : `No products in this category :(`}</h2>

                {category.map((product) => <div className='wholeItem' >
                    <h1>{product.name}</h1>
                    <div className="content">
                        <div className='itemImage' onClick={() => props.getImage(product.id)}>
                                <img className="image" src={product.image} alt="item"/>
                        </div>
                        <div className="mainItem">
                            {product.available
                                ? <div className="mainItem"> <p>{product.description}</p>
                                    <p>Price: {product.price} PLN</p>
                                    <p>{product.promoPrice
                                        ? `Promo Price: ${product.promoPrice} PLN`
                                        : ``} </p>
                                    <p>{product.promoPrice
                                        ? `Saving: ${(product.price - product.promoPrice).toFixed(1)} PLN`
                                        : ``} </p>
                                    <button className="button" onClick={() => props.setCart(product)}>Add to cart</button>
                                </div>
                                : <div className="error"> <p>Product is not available :(</p> </div>}
                        </div>
                    </div>
                </div>)}
        </div>
    </div>
    )
}

export default Products;