import React,{useContext} from "react";
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from "../../store/cart-context";
import CartItem from './CartItem/CartItem';

// const DUMMY_CART_ITEMS = [
//     { id: 'c1', name: 'Sushi', amount: 2, price: 12.30 },
//     { id: 'c2', name: 'Pizza', amount: 1, price: 10.50 },
//     { id: 'c3', name: 'Salad', amount: 1, price: 7.30 },
// ];

function Cart(props) {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const onAddHandler = (item) => {
       cartCtx.addItem({...item, amount:1});
    };
    const onRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    }; 

    const cartItemList = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => 
        <CartItem
            {...item} 
            key={item.id} 
            onAdd={onAddHandler.bind(null, item)}
            onRemove={onRemoveHandler.bind(null, item.id)}
            />)
        }
    </ul>;

    return (<Modal onClose={props.onClose}>
        {cartItemList}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>
                {totalAmount}
            </span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>);
}

export default Cart;