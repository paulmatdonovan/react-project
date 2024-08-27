import React, { useContext } from 'react'
// ?import css/
import { ShopContext } from '../ShopContext/ShopContext'
// import cart_cross_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { techProducts } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            <div>
                <hr />
                {techProducts.map((e) => {
                    if (cartItems[e.id]) {
                        return <div>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt={e.image} className="cart-icon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.price}</p>
                                <button className='cart-items-quantity'>{cartItems[e.id]}</button>
                                <p>${e.price * cartItems[e.id]}</p>
                                <img className="cartitems-remove-icon" src={cart_cross_icon} onClick={() => { removeFromCart(e.id) }} alt="remove" />
                            </div>
                            <hr />
                        </div>
                    }
                    return null;
                })}
                <div className="cart-items-down">
                    <div className="cart-items-total">
                        <h1>Cart total</h1>
                        <div>
                            <div className="cart-items-total-items">
                                <h3>Total</h3>
                                <h3>${getTotalCartAmount()}</h3>
                            </div>
                            <hr />
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
