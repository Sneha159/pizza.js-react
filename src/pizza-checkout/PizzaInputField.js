import React from 'react';

export default ({
    input,
    placeholder,
    type,
    fullWidth,
    meta: { touched, error }
}) => {
    const containerClass = `address-form__item${
        fullWidth ? ' address-form__item--full-width' : ''
        }`;
    const inputClass = `address-form__input${
        (touched && error) ? ' address-form__input--validation-error' : ''
        }`;

    return (
        <div className={containerClass}>
            <input
                {...input}
                type={type}
                placeholder={placeholder}
                className={inputClass}
            />
            {touched && error &&
            <span className="address-form__validation-error-text">{error}</span>
            }
        </div>
    );
}