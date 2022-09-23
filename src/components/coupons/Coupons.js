import React from 'react';
import './Coupons.css';
const Coupons = (props) => {
    const inputRef = React.createRef();
    return (
        <div className="main">
            <h2 className="header2">Coupons</h2>
            <div className="inputField">
                <input ref={inputRef} type="text" placeholder="Enter coupon code" />
                <button className="button" onClick={() => props.discountCode(inputRef.current.value)}>Redeem</button>
            </div>
        </div>
    )
}

export default Coupons;