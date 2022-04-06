import React from 'react';
import './SelectedProduct.css';

const SelectedProduct = (props) => {
    // destructuring
    const { product, deleteItem } = props;

    const { name, picture, price, } = product;
    // console.log(props.product);

    return (
        <div className="selected">
            <img src={picture} alt="" />
            <div>
                <h5>{name}</h5>
                <h4>Price : {price}</h4>
                <button onClick={() => deleteItem(props.product)}>delete</button>
            </div>
        </div>
    );
};

export default SelectedProduct;