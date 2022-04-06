import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    // fetching data from json
    useEffect(() => {
        fetch('fake.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products);


    //  add product to cart
    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct);

        if (cart.filter((product) => product.id === selectedProduct.id).length >= 1) {
            alert("This Product already Select");
        }
        else {
            if (cart.length >= 4) {
                alert("Already 4 Items Selected");
            }
            else {
                let newCart = [...cart, selectedProduct];
                setCart(newCart);
            }
        }
    }

    // clear cart
    const handleRemoveToCart = () => {
        setCart([]);
    }

    return (
        <div className='products-cart'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>
            <div className='cart'>
                <h3>Total Select : {cart.length}</h3>
                <Cart
                    handleRemoveToCart={handleRemoveToCart}
                    cart={cart}
                    setCart={setCart}
                    key={cart.id}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;