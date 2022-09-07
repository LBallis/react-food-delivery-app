import React from 'react';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS_LIST = [
    { id:'m1', name:'Meal_1', description: 'this is the 1st meal', price:5.50},
    { id:'m2', name:'Meal_2', description: 'this is the 2nd meal', price:10.50},
    { id:'m3', name:'Meal_3', description: 'this is the 3rd meal', price:15.50},
    { id:'m4', name:'Meal_4', description: 'this is the 4th meal', price:8.50}
];

function AvailableMeals() {
    const mealsList = DUMMY_MEALS_LIST.map((item) => {
        return <MealItem 
             key={item.id}
             id={item.id}
             name={item.name} 
             description={item.description} 
             price={item.price}
            />
     });

    return (<section className={classes.meals}>
    <Card>
        <ul>
            {mealsList}
        </ul>
    </Card>
    </section>
    );

}

export default AvailableMeals;