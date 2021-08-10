import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CardItem from '../cart-item/cart-item.component';


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CardItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>checkout</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});


export default connect(mapStateToProps)(CartDropdown);