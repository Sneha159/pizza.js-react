import React from 'react';
import AddressForm from './AddressForm';
import ShoppingCart from '../ShoppingCart';

export default () => (
    <div>
        <ShoppingCart />
        <AddressForm onSubmit={(values) => console.log(values)}/>
    </div>
);