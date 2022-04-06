import React from 'react';
import { icons } from 'react-icons';
import './Products.css';
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Products = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    // console.log(product);
    // console.log(handleAddToCart);
    const { name, picture, price } = product;
    // console.log(picture);

    return (
        <div className='product'>
            <img className='product-image' src={picture} alt="" />
            <div className="product-details">
                <h4>{name}</h4>
                <h5>Price : {price}</h5>
                <button className='product-btn' onClick={() => handleAddToCart(product)}
                ><span>Add To Cart</span> <span className='icon'><AiOutlineShoppingCart> </AiOutlineShoppingCart></span></button>
            </div>
        </div >
    );
};

export default Products;