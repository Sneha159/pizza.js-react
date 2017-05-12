import React from 'react';
import { reduxForm, Field } from 'redux-form';

const AddressForm = ({ handleSubmit }) => (
    <form id="addressForm" onSubmit={handleSubmit}>
        <div id="salutation" className="address-form__item address-form__item--full-width">
            <select>
                <option>Frau</option>
                <option>Herr</option>
                <option>Other</option>
            </select>
        </div>

        <div id="firstName" className="address-form__item">
            <Field
                name="firstName"
                type="text"
                placeholder="Vorname"
                component="input"
                className="address-form__input"
            />
        </div>

        <div id="lastName" className="address-form__item">
            <Field
                name="lastName"
                type="text"
                placeholder="Nachname"
                component="input"
                className="address-form__input"
            />
            <span className="address-form__validation-error-text">Nachname fehlt</span>
        </div>

        <div id="streetAndNumber" className="address-form__item address-form__item--full-width">
            <Field
                name="streetAndNumber"
                type="text"
                placeholder="Strasse / Nr"
                component="input"
                className="address-form__input"
            />
        </div>

        <div id="cityZip" className="address-form__item">
            <input type="text" placeholder="PLZ" className="address-form__input"/>
        </div>

        <div className="address-form__item">
            <input type="text" placeholder="Ort" className="address-form__input"/>
        </div>

        <div id="phoneNumber" className="address-form__item address-form__item--full-width">
            <input type="tel" placeholder="Telefonnummer" className="address-form__input"/>
        </div>

        <div className="address-form__item address-form-item--align-right">
            <button type="submit" className="address-form__order-button">Bestellen!</button>
        </div>
    </form>
);

export default reduxForm({
    form: 'AddressForm'
})(AddressForm);