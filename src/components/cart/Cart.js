import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    return (
        <div className="cart">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <h3>Cart</h3>
                {cart.map((item, index) => {
                    return <div className='cartItems'>
                        <p className="itemName" key={item}>{item.name}</p>
                        <div class="material-symbols-outlined" onClick={() => props.deleteItem(index)}>
                            <p>cancel</p>
                        </div>
                    </div>
                })}
                <div className="buttons">
                    <button className="button" onClick={props.clearCart}>Clear Cart</button>
                    <button className="button" onClick={props.deleteLast}>Delete Last Item</button>
                </div>
        </div>
    )
};

export default Cart;