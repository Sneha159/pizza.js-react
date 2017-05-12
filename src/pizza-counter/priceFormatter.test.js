import formatPrice from './priceFormatter';

it('should prepend CHF to the number given', () => {
    const price = formatPrice(10);

    expect(price.substr(0,6)).toEqual('CHF 10');
});

it('should display two decimals', () => {
    const price = formatPrice(6);

    expect(price.substr(4)).toEqual('6.00');
});

it('should round in steps of 0.05', () => {
    const price = formatPrice(4.51);

    expect(price.substr(4)).toEqual('4.50');
});