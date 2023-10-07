import PropTypes from 'prop-types';
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const cartReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_TO_CART':
                return [...state, action.payload];
            case 'REMOVE_FROM_CART':
                return state.filter(product => product._id !== action.payload._id);
            case 'CLEAR_CART':
                return [];
            default:
                return state;
        }
    };

    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
