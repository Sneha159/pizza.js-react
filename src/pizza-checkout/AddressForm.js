import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PizzaInputField from './PizzaInputField';

const requiredValidation = errorText =>
    value => !value ? errorText : undefined;

const AddressForm = ({ handleSubmit }) => (
    <form id="addressForm" onSubmit={handleSubmit}>
        <div className="address-form__item address-form__item--full-width">
            <Field
                name="salutation"
                component="select"
            >
                <option>Frau</option>
                <option>Herr</option>
                <option>Other</option>
            </Field>
        </div>

        <Field
            name="firstName"
            type="text"
            placeholder="Vorname"
            component={PizzaInputField}
            validate={[requiredValidation('Vorname fehlt')]}
        />

        <Field
            name="lastName"
            type="text"
            placeholder="Nachname"
            component={PizzaInputField}
            validate={[requiredValidation('Nachname fehlt')]}
        />

        <Field
            name="streetAndNumber"
            type="text"
            placeholder="Strasse / Nr"
            fullWidth
            component={PizzaInputField}
            validate={[requiredValidation('Adresse fehlt')]}
        />

        <Field
            name="cityZip"
            type="number"
            placeholder="PLZ"
            component={PizzaInputField}
            validate={[(value) => value >= 1000 && value <= 9999 ? undefined : 'PLZ ungültig']}
        />

        <Field
            name="city"
            type="text"
            placeholder="Ort"
            component={PizzaInputField}
            validate={[requiredValidation('Ort fehlt')]}
        />

        <Field
            name="phoneNumber"
            type="tel"
            placeholder="Telefonnummer"
            fullWidth
            component={PizzaInputField}
            validate={[requiredValidation('Telefonnummer fehlt')]}
        />

        <div className="address-form__item address-form-item--align-right">
            <button type="submit" className="address-form__order-button">Bestellen!</button>
        </div>
    </form>
);

export default reduxForm({
    form: 'AddressForm'
})(AddressForm);