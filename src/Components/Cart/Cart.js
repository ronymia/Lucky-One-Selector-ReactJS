import React from 'react';
import SelectedProduct from '../SelectedProduct/SelectedProduct';
import './Cart.css';

const Cart = (props) => {
    const { cart, setCart } = props;

    // get random 1 item
    const getRandom = () => {
        setCart([cart[Math.floor(Math.random() * ((cart.length) - 1) - 0 + 1) + 0]])
    }
    const deleteItem = (selectedItem) => {
        const rest = cart.filter(product => product.id !== selectedItem.id);
        setCart(rest);
    }

    return (
        <div className='cart-details'>
            <div className="cart-container">
                <h2>Selected Products</h2>
                {
                    cart.map(product =>
                        <SelectedProduct
                            key={product.id}
                            product={product}
                            cart={cart}
                            setCart={setCart}
                            deleteItem={deleteItem}
                        ></SelectedProduct>
                    )
                }
            </div>
            <div className="btn-group">
                {(cart.length === 4) && <button className='choose-btn' onClick={() => {
                    getRandom()
                }} >Choose 1 for me</button>} <br />
                <button className='choose-again' onClick={props.handleRemoveToCart}>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;