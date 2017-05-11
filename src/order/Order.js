import React from 'react';

export default () => (
    <div id="addressForm">

        <div id="salutation" className="address-form__item address-form__item--full-width">
            <select>
                <option>Frau</option>
                <option>Herr</option>
                <option>Other</option>
            </select>
        </div>

        <div id="firstName" className="address-form__item">
            <input type="text" placeholder="Vorname" className="address-form__input"/>
        </div>

        <div id="lastName" className="address-form__item">
            <input type="text" placeholder="Nachname"
                   className="address-form__input address-form__input--validation-error"/>
            <span className="address-form__validation-error-text">Nachname fehlt</span>
        </div>

        <div id="streetAndNumber" className="address-form__item address-form__item--full-width">
            <input type="text" placeholder="Strasse / Nr" className="address-form__input"/>
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
    </div>
);
