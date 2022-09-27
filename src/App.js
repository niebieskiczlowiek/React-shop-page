import React, { useState, useEffect } from 'react'; 
import './App.css';
import Products from './components/products/Products'
import Cart from './components/cart/Cart'
import Coupons from './components/coupons/Coupons';


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartState, setCartState] = useState(false);
  const [itemCategory, setCategory] = useState([])
  const [couponBox, setCouponBox] = useState(false);
  let [cartSum, setCartSum] = useState(0);
  const [image, setImageState] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('./products.json');
      const data = await response.json();
  
      setProducts(data.products);
      setCategory(data.products);
    };
  
    getData();
  }, []); /*  <---- ten pusty array daje to ze funkcja odpali sie tyklo raz (to tylko taki zapis, tu nie ma faktycznego arraya) */

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartState(true);
    if (product.promoPrice){
      const sum = cartSum + product.promoPrice;
      setCartSum(Math.round(sum * 100) / 100);
    } else {
      const sum = cartSum + product.price;
      setCartSum(Math.round(sum * 100) / 100);
    }
    
  }

  const clearCart = () => {
    setCart([]);
    setCartSum(0);
  }

  const showCart = () => {
    setCartState(!cartState);
  }

  const showCouponBox = () => {
    setCouponBox(!couponBox);
  }

  const deleteItem = (index, price, promoPrice) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    console.log(price, promoPrice)
    if (cart[index].promoPrice === null) {
      const sum = cartSum - cart[index].price;
      setCartSum(Math.round(sum * 100) / 100);
    } else {
      const sum = cartSum - cart[index].promoPrice;
      setCartSum(Math.round(sum * 100) / 100);
    }
  }

  const discountCode = (code) => {
    const item = products.filter((products) => products.promoCode === code)[0]
    const redeemed = item.redeemed
    if (item) {
      if (redeemed === false) {
        item.price = (item.price - item.price*item.promoCodeDiscount).toFixed(1);
        item.redeemed = true;
        setProducts([...products, item])
      }
      else {
        alert('Coupon already used')
      }
    }
    else {
      console.log('Invalid coupon code')
    }
  } 

  const category = (category) => {
    if (category === 'all') {
      setCategory(products)
    }
    else {
      const listCategory = products.filter((products) => products.category === category);
      setCategory(listCategory);
    }
  }
  /*const getCartSum = () => {
  } */

  const getImage = (id) => {
    setImageState(!image)
    console.log(id, image)
  }

  return (
    <div className="App">
      <div className="topbar">
        
        <div className="top3"></div>
        <div className="top2" onClick={showCouponBox}>
          <p className="topButton">Kupony</p>
        </div>
        <div className="top1">
          <h1 className="header"> Shop Pracz </h1>
        </div>
        <div className="top2" onClick={showCart}>
          <p className="topButton">Koszyk</p>
        </div>
        <div className="top3"></div>

      </div>  
      {couponBox && <Coupons discountCode={discountCode}/>}
      {cartState && <Cart cart={cart} className="outerCart" clearCart={clearCart} deleteItem={deleteItem} cartSum={cartSum} />}
      <div> 
        <Products products={products} setCart={addToCart} category={category} itemCategory={itemCategory} getImage={getImage}/>
      </div> 
    </div>
  );
}

export default App;