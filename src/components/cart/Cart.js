import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    return (
        <div className="cart">
            <h3>Cart</h3>
                {cart.map((item, index) => {
                    return <div className='cartItems'> 
                        <p key={item}>{item.name}</p>
                        <button onClick={() => props.deleteItem(index)}>X</button> 
                    </div>
                })}
            <button onClick={props.clearCart}>Clear Cart</button>
            <button onClick={props.deleteLast}>Delete Last Item</button>
        </div>
    )
};
export default Cart;