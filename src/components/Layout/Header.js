import React from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';

function Header(props) {
    return (<React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}>Your Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of meals'></img>
        </div>
    </React.Fragment>);
}

export default Header;