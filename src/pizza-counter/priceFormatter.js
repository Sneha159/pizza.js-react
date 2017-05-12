export default (price) => {
    const roundedPrice = Math.round(price * 20) / 20;
    return `CHF ${roundedPrice.toFixed(2)}`;
};