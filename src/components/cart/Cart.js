import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    return (
        <div className="cart">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className="exit">
                <div className="material-symbols-outlined">
                    arrow_forward
                </div>
            </div>
            <h3>{props.cartSum}</h3>
                {cart.map((item, index) => {
                    return <div className='cartItems'>
                        <p className="itemName" key={item}>{item.name}</p>
                        <div className="material-symbols-outlined" onClick={() => props.deleteItem(index, item.price, item.promoPrice)}>
                            <p>cancel</p>
                        </div>
                    </div>
                })}
                <div className="buttons">
                    <button className="button" onClick={props.clearCart}>Clear Cart</button>
                </div>
        </div>
    )
};

export default Cart;