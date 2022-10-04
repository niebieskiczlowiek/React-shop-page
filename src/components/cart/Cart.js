import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const noPromo = props.sumNoPromo - props.cartSum;

    return (
        <div className="cart">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <h3 className="cartHeader">Total: {props.cartSum} PLN</h3>
            <h4 className="cartHeader">Saving: {Math.round((noPromo * 100) / 100)} PLN</h4>
            <div className="outerCart">
                {cart.map((item, index) => {
                    return <div className='cartItems'>
                        <p className="itemName" key={item}>{item.name}</p>
                        <div className="material-symbols-outlined" onClick={() => props.deleteItem(index, item.price, item.promoPrice)}>
                            <p>cancel</p>
                        </div>
                    </div>
                })}
            </div>
            <button className="button" onClick={props.clearCart}>Clear Cart</button>
        </div>
    )
};

export default Cart;