import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const Meal = ({meal, handleSelectButton}) => {
    const {strMealThumb, strMeal} = meal;
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <button onClick={() => handleSelectButton(meal)} className='btn-select'>
                Select Meal
                <FontAwesomeIcon icon={faUtensils} />
                </button>
        </div>
    );
};

export default Meal;