import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Убедитесь, что путь верный

function CartPage() {
    const { cart } = useCart(); // Получаем состояние корзины из контекста корзины

    // Если корзина пуста, отображаем сообщение
    if (cart.length === 0) return (
        <div>
            <h1>Ваша Корзина</h1>
            <p>Корзина пуста</p>
            <Link to="/products">Продолжить Покупки</Link>
        </div>
    );

    // Если в корзине есть товары, отображаем их
    return (
        <div>
            <h1>Ваша Корзина</h1>
            {cart.map((product, index) => (
                <div key={index}>
                    <p>{product.title} - ${product.price} (~{(product.price * 88.7).toFixed(2)} сом)</p>
                </div>
            ))}
            <p>
                Итого: ${cart.reduce((sum, product) => sum + product.price, 0).toFixed(2)}
                (~{(cart.reduce((sum, product) => sum + product.price, 0) * 88.7).toFixed(2)} сом)
            </p>
            <button>Оплатить</button>
            <Link to="/products">Продолжить Покупки</Link>
        </div>
    );
}

export default CartPage;
