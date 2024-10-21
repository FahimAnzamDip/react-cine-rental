export function CartReducer(cartData, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...cartData, action.payload];
        case 'REMOVE_FROM_CART':
            return cartData.filter((data) => {
                return data.id !== action.payload.id;
            });
        default:
            throw new Error('Unkown Action: ' + action.type);
    }
}
