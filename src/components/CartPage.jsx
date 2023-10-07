import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { removeFromCart } from "./productsSlice"; 
function CartPage() {
    const cart = useSelector(state => state.products.cartItems); 
    const dispatch = useDispatch();

    const total = cart.reduce((sum, product) => sum + parseFloat(product.price.replace('$', '')), 0);
    const exchangeRate = 88.7;

    const handleRemoveFromCart = (productToRemove) => {
        dispatch(removeFromCart(productToRemove._id)); 
    };

    if (!cart.length) {
        return (
            <div>
                <h1>Ваша Корзина</h1>
                <p>Корзина пуста</p>
                <Link to="/products">Продолжить Покупки</Link>
            </div>
        );
    }

    return (
        <div>
            <h1>Ваша Корзина</h1>
            {cart.map((product) => (
                <div key={product._id} className="cart-item">
                    <p>{product.name} - ${product.price} (~{(parseFloat(product.price.replace('$', '')) * exchangeRate).toFixed(2)} сом)</p>
                    <button onClick={() => handleRemoveFromCart(product)}>Удалить</button>
                </div>
            ))}
            <div className="cart-summary">
                <p>
                    Итого: ${total.toFixed(2)} (~{(total * exchangeRate).toFixed(2)} сом)
                </p>
                <button>Оплатить</button>
            </div>
            <Link to="/products">Продолжить Покупки</Link>
        </div>
    );
}

export default CartPage;
