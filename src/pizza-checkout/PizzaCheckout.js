import React from 'react';
import AddressForm from './AddressForm';

export default () => (
    <AddressForm onSubmit={(values) => console.log(values)}/>
);
